const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bodyParser.json());


// Globals
const API_VERSION = process.env.API_VERSION;


app.get('/', (req, res) => {
    res.send('Hello World');
})

app.use(`/${API_VERSION}/auth`, require('./routes/auth'));
app.use(`/${API_VERSION}/users`, require('./routes/user'));
app.use(`/${API_VERSION}/rides`, require('./routes/ride'));
app.use(`/${API_VERSION}/bookings`, require('./routes/booking'));
app.use(`/${API_VERSION}/reviews`, require('./routes/review'));

module.exports = app;