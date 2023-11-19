const express = require('express');
const router = express.Router();
const {getUser, getUserData} = require('../controllers/userController');

router.get('/usersModel', getUser);

router.get('/users', getUserData);

module.exports = router