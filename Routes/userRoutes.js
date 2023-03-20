const express = require('express');
const { getAllusers, createUser, updateLocation } = require('../controllers/userController');

const router = express.Router();

router.route("/users/all").get(getAllusers);
router.route("/users/register").post(createUser);
router.route("/users/update/:id").put(updateLocation);

module.exports = router ; 