const express = require('express');
const router = express.Router();
const {getUser, getUserData, searchUser} = require('../controllers/userController');

router.get('/usersModel', getUser);

router.get('/users', getUserData);

router.get('/users/search', searchUser);

router.get('/users/Gender', searchUser);

module.exports = router