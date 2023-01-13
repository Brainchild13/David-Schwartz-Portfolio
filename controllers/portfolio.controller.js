const Portfolio = require('../models/portfolio.model');

const getPortfolios = async (req, res) => {
    try {
        const portfolios = await Portfolio.find();
        res.status(200).json(portfolios)
        console.log(portfolios)
    } catch (err) {
        res.status(500).json({ message: err.message }); 
    }    
}

const addPortfolio = async (req, res) => {
    const portfolio = new Portfolio(req.body);
    try {
        const newPortfolio = await portfolio.save()
        res.status(201).json(newPortfolio);
        console.log(newPortfolio);
    } catch (err) {
        res.status(400).json({ message: err.message }); 
    }
}

module.exports = { getPortfolios, addPortfolio };