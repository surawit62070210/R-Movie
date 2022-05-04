const express = require("express");
const client = require("../models/DbConfig");
const bcrypt = require("bcrypt");
const { jwtTokens } = require("../utils/jwt-helpers.js");
const { authenticateToken } = require("../middleware/authorization");
router = express.Router();

let refreshTokens = [];

router.get("/", authenticateToken, async (req, res) => {
  try {
    console.log(req);
    const users = await client.query("select * from users");
    res.json({ users: users.rows });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.post("/", async (req, res) => {
  try {
    const hashPassword = await bcrypt.hash(req.body.user_password, 10);
    // console.log([req.body.user_name, req.body.user_email, hashPassword, req.body.user_firstname, req.body.user_lastname, req.body.user_nickname])
    const newUser = await client.query(
      "INSERT INTO users (user_name, user_email, user_password,user_mobile, user_firstname, user_lastname, user_birthday) VALUES ($1,$2,$3,$4,$5,$6, $7) RETURNING *",
      [
        req.body.user_name,
        req.body.user_email,
        hashPassword,
        req.body.user_mobile,
        req.body.user_firstname,
        req.body.user_lastname,
        req.body.user_birthday,
      ]
    );
    const jwt = jwtTokens(
      newUser.rows[0].user_email,
      newUser.rows[0].user_password,
      newUser.rows[0].user_name,
      newUser.rows[0].user_firstname,
      newUser.rows[0].user_lastname,
      newUser.rows[0].user_mobile,
      newUser.rows[0].user_birthday
    );
    res.json(jwt);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.post("/update", async (req, res) => {
    user = req.body 
    try{
    let query = await client.query(`UPDATE users set user_mobile = '${req.body.user_mobile}', user_name = '${req.body.user_name}', user_firstname = '${req.body.user_firstname}', user_lastname = '${req.body.user_lastname}' where user_email = '${req.body.user_email}'`)
    console.log(query.rowCount)
    if(1 > 0){
        try{
        const users = await client.query(`select * from users where user_email = '${user.user_email}'`)
        console.log(users.rows)
        let tokens = jwtTokens(users.rows[0].user_email, users.rows[0].user_password, users.rows[0].user_name, users.rows[0].user_firstname, users.rows[0].user_lastname, users.rows[0].user_mobile, users.rows[0].user_birthday);
        res.status(200).json(tokens)}
        catch(error){
            console.log(error)
        }
    }


}catch(error){
        res.status(404).json(error)
        console.log(error)
    }
});

router.delete("/", async (req, res) => {
  let email = req.body.user_email;
  console.log(email);
  let query = `DELETE FROM users where user_email = '${email}'`;
  console.log(query);
  try {
    const users = await client.query(query);
    res.status(204).json(users.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;
