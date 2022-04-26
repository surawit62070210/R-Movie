const express = require("express");
router = express.Router();
const data = require('../json.json')
// const parsedata = JSON.parse(data)
router.get('/' , async function (req, res, next){
    res.send(data.items)
}) 
module.exports = router;