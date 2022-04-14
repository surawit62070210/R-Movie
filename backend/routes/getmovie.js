const express = require("express");
router = express.Router();
const data = require('../json.json')

router.get('/' , async function (req, res, next){
    res.send(data)
}) 
module.exports = router;