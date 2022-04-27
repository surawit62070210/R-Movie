
const express = require("express");
router = express.Router();
router.get('/' , async function (req, res, next){
    res.send("sda")
}) 
module.exports = router;