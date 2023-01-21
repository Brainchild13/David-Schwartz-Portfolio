const express = require('express');
const router = express.Router();

const userControllers = require('../controllers/userControllers');


router.get('/users/create', userControllers.all);

router.post('/user/create', userControllers.create);

router.put('/users/update', userControllers.update);

router.delete('/users/delete', userControllers.delete);

module.exports = router;