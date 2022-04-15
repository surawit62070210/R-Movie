const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

let app = express();
app.use(bodyParser.json());  // ให้ app(express) ใช้งานการ parse json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(morgan('dev')); // ให้ app(express) ใช้งานการ morgam module
app.use(cors()); // ให้ app(express) ใช้งานการ cors module

const MoiveRouter = require('./routes/getmovie')
app.use(MoiveRouter)
app.listen(3000, function() {
    console.log('Server Listen at http://localhost:3000');
});