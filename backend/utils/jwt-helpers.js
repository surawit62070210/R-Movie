import jwt from 'jsonwebtoken';

//Generate an access token and a refresh token for this database user
function jwtTokens({user_name, user_email, user_password, user_firstname, user_lastname, user_nickname}) {
  const user = { user_id, user_name, user_email,user_password, user_firstname, user_lastname, user_nickname}; 
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '20s' });
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '5m' });
  return ({ accessToken, refreshToken });
}

export {jwtTokens};