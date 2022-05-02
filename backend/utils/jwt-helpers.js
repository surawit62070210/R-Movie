const jwt=  require('jsonwebtoken');

//Generate an access token and a refresh token for this database user
const jwtTokens = (user_email, user_password, user_username) => {
  const user = {user_email:user_email,user_password:user_password, user_name:user_username}; 
  
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '5m' });
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '15m' });
  return ({ accessToken, refreshToken });
}
module.exports = {jwtTokens};