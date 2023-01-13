const express = require('express');
const router = express.Router();

const { getUsers, addUser } = require('../controllers/user.controller');


router.get('/users', getUsers);

router.post('/user', addUser);

module.exports = router;