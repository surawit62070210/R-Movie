const express = require('express');
const jwt = require('jsonwebtoken');
const client = require('../models/DbConfig');
const bcrypt = require('bcrypt');
const { jwtTokens } = require('../utils/jwt-helpers.js');

const router = express.Router();
router.post('/login', async (req, res)=>{
    try{
        console.log(req.cookies, req.get('origin'));
        const {email, password} = req.body;
        const users = await client.query(`select * from users where user_email = '${email}'`)
        if(users.rows.length === 0) return res.status(401).json({error: 'Email is incorrect'});
        const validPassword = await bcrypt.compare(password, users.rows[0].user_password)
        if(!validPassword) res.status(401).json({error: "password is incorrect"})
        let tokens = jwtTokens(users.rows[0].user_email, users.rows[0].user_password, users.rows[0].user_name, users.rows[0].user_firstname, users.rows[0].user_lastname, users.rows[0].user_mobile, users.rows[0].user_birthday);
        // res.cookie('refresh_token', tokens.refreshToken);
        res.json({tokens:tokens});
    } catch(error){
        res.status(401).json({error:error.message})
    }
})
router.get('/refresh_token', (req, res) => {
    try {
        const authHeader = req.headers['authorization']
        const refreshToken = authHeader && authHeader.split(' ')[1];
      if (refreshToken === null) return res.sendStatus(401);
      jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (error, user) => {
        if (error) return res.status(403).json({error:error.message});
        res.json(jwtTokens(user.user_email, user.user_password, user.user_name, user.user_firstname, user.user_lastname, user.user_mobile, user.user_birthday));
      });
    } catch (error) {
      res.status(401).json({error: error.message});
      console.log(error)
    }
  });



router.delete('/refresh_token', (req, res) => {
    try{
        const refresh =  req.cookies.refresh_token;
        console.log(req.cookies);
        if (refreshToken === null) return res.sendStatus(401);
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (error, user) => {
          if (error) return res.status(403).json({error:error.message});
          let tokens = jwtTokens(user);
          res.cookie('refresh_token', tokens.refreshToken);
          return res.json(tokens);
        });
    }catch(error){
        res.json(401).json({error: error.message})
    }
})



module.exports = router;