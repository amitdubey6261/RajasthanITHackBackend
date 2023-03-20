const express = require('express');
const { getAllusers } = require('../controllers/userController');

const router = express.Router();

router.route("/users/all").get(getAllusers);