const express = require('express');
const cookiePareser = require('cookie-parser');
const app = express();

const errorMiddleware = require('./middleware/error');

app.use(express.json());
app.use(cookiePareser());

module.exports = app ;