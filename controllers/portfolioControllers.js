const Portfolio = require('../models/portfolioModel');

const portfolioControllers = {
    all: async (req, res) => {
        try {
            const allPortfolios = await Portfolio.find()
            res.json(allPortfolios);
        } catch (err) {
            res.json({Errors: err})
        }
    },
    create: async (req, res) => {
        try {
            let newPortfolio = new Portfolio({
                portfolioName: req.body.portfolioName,
                portfolioWebsite: req.body.portfolioWebsite,
                portfolioSoftware: req.body.portfolioSoftware,
                portfolioDescription: req.body.portfolioDescription,
                portfolioMainImage: req.body.portfolioImage,
                portfolioContributors: req.body.portfolioContributors
            })
            let savedPortfolio = await newPortfolio.save();
            res.json(savedPortfolio);
        } catch (err) {
            res.json({Error: err})
        }
    },
    update: async (req, res) => {
        try {
            let foundPortfolio = await Portfolio.findOneAndUpdate({portfolioName: req.body.portfolioName}, req.body);
        res.json(foundPortfolio);
        } catch (err) {
            res.json({Error: err})
        }
    },
    delete: async (req, res) => {
        try {
            let deletedPortfolio = await Portfolio.findOneAndDelete({portfolioName: req.body.portfolioName}, req.body);
            res.json(deletedPortfolio)
        res.json(deletedPortfolio);
        } catch (err) {
            res.json({Error: err})
        }
    }
}

module.exports = portfolioControllers;