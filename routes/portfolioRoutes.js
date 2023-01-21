const express = require('express');
const router = express.Router();

const portfolioControllers = require('../controllers/portfolioControllers');



router.get('/portfolios', portfolioControllers.all);

router.post('/portfolios/create', portfolioControllers.create);

router.put('/portfolios/update', portfolioControllers.update);

router.delete('/portfolios/delete', portfolioControllers.delete);

module.exports = router;