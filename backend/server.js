const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

let server = express();
server.use(bodyParser.json());  // ให้ server(express) ใช้งานการ parse json
server.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
server.use(morgan('dev')); // ให้ server(express) ใช้งานการ morgam module
server.use(cors()); // ให้ server(express) ใช้งานการ cors module

const getMoive = require('./routes/getmovie')
server.use()
server.listen(3000, function() {
    console.log('Server Listen at http://localhost:3000');
});