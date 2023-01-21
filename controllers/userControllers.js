const User = require('../models/userModel');


const userControllers = {
    all: async (req, res) => {
        try {
            let allUsers = User.find();
            res.json(allUsers)
        } catch (err) {
            res.json({ errors: err });
        }
    },
    create: async (req, res) => {
        try {
           const newUser = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email, 
            password: req.body.password
        })  
        let savedUser = await newUser.save();
        res.json(savedUser);
        } catch (err) {
            res.json({errors: err});
        }
    },
    update: async (req, res) => {
        try {
            let foundPortfolio = Portfolio.find({portfolioName: req.body.portfolioName}, req.body);
            res.json(foundPortfolio);
        } catch (err) {
                res.json({Error: err})
        }
       
    },
    delete: async (req, res) => {
        try {
            let deletedPortfolio = await Portfolio.findOneAndDelete({portfolioName: req.body.portfolioName}, req.body)
        res.json(deletedPortfolio);
        } catch (err) {
            res.json({Error: err})
        }
    }
}


module.exports = userControllers;