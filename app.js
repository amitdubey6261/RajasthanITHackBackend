const express = require('express');
const cookiePareser = require('cookie-parser');
const app = express();

const errorMiddleware = require('./middleware/error');

app.use(express.json());
app.use(cookiePareser());

const user = require("./Routes/userRoutes");

app.use("/api/v1",user);

app.use(errorMiddleware);

module.exports = app ;