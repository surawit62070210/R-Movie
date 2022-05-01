
const express = require("express");
const client = require("../models/DbConfig")
const bcrypt = require('bcrypt');
const { jwtTokens } =  require('../utils/jwt-helpers.js');
const { authenticateToken } = require('../middleware/authorization')
router = express.Router();

let refreshTokens = [];

router.get('/', authenticateToken, async (req, res) =>{
    try {
        console.log(req);
        const users = await client.query('select * from users')
        res.json({users : users.rows})
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})
router.post('/', async (req, res) => {
    try{
        const hashPassword = await bcrypt.hash(req.body.user_password, 10);
        // console.log([req.body.user_name, req.body.user_email, hashPassword, req.body.user_firstname, req.body.user_lastname, req.body.user_nickname])
        const newUser = await client.query(
            'INSERT INTO users (user_name, user_email, user_password,user_mobile, user_firstname, user_lastname, user_birthday) VALUES ($1,$2,$3,$4,$5,$6, $7) RETURNING *'
            , [req.body.user_name, req.body.user_email, hashPassword, req.body.user_mobile, req.body.user_firstname, req.body.user_lastname, req.body.user_birthday]
        );
        
        res.json(jwtTokens(newUser.rows[0].user_email, newUser.rows[0].user_password));
    }catch(error){
        res.status(500).json({error: error.message})
    }
});


router.delete('/', async (req,res)=>{
    let email = req.body.user_email
    console.log(email)
    let query =`DELETE FROM users where user_email = '${email}'`
    console.log(query)
    try {
      const users = await client.query(query);
      res.status(204).json(users.rows);
    } catch (error) {
      res.status(500).json({error: error.message});
    }
  })
module.exports = router
