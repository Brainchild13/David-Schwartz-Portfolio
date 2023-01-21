const express = require('express');
const router = express.Router();

const { getPortfolios, addPortfolio } = require('../controllers/portfolioControllers');



router.get('/portfolios', getPortfolios);

router.post('/portfolio', addPortfolio);

module.exports = router;