const jwt=  require('jsonwebtoken');

//Generate an access token and a refresh token for this database user
const jwtTokens = ({user_email, user_password}) => {
  const user = {user_email,user_password}; 
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '5m' });
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '15m' });
  return ({ accessToken, refreshToken });
}
module.exports = {jwtTokens};