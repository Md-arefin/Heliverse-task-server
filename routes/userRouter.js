const express = require('express');
const router = express.Router();
const {getUser, getUserData, searchUser,getUsersByGender, getUsersByDomain} = require('../controllers/userController');

router.get('/usersModel', getUser);

router.get('/users', getUserData);

router.get('/users/search', searchUser);

router.get('/users/Gender', getUsersByGender);

router.get('/users/Domain', getUsersByDomain);

module.exports = router