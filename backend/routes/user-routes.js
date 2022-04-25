
const express = require("express");
const client = require("../models/DbConfig")
const bcrypt = require('bcrypt');
const jwtTokens =  '../utils/jwt-helpers.js';
router = express.Router();

router.get('/', async (req, res) =>{
    try {
        console.log(req.cookies);
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
            'INSERT INTO users (user_name, user_email, user_password, user_firstname, user_lastname, user_nickname) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *'
            , [req.body.user_name, req.body.user_email, hashPassword, req.body.user_firstname, req.body.user_lastname, req.body.user_nickname]
        );
        // res.json(jwtTokens(req.body.user_name, req.body.user_email, hashPassword, req.body.user_firstname, req.body.user_lastname, req.body.user_nickname));
        res.json("newUser.rows")
    }catch(error){
        res.status(500).json({error: error.message})
    }
});
module.exports = router