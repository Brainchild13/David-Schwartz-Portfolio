const express = require('express');
const router = express.Router();

const { getUsers, addUser } = require('../controllers/userControllers');


router.get('/users', getUsers);

router.post('/user', addUser);

module.exports = router;