const express = require('express');
const { getAllusers, createUser, updateLocation, login } = require('../controllers/userController');

const router = express.Router();

router.route("/users/all").get(getAllusers);
router.route("/users/register").post(createUser);
router.route("/users/update/:id").put(updateLocation);
router.route("/users/getid/:id").get(login);

module.exports = router ; 