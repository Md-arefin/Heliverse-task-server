const express = require('express');
const router = express.Router();
const {getUser, getUserData, searchUser} = require('../controllers/userController');

router.get('/usersModel', getUser);

router.get('/users', getUserData);

router.get('/users/search', searchUser);

module.exports = router