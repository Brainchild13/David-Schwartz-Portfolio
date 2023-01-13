const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portfolioSchema = Schema({
    "portfolioName": {
        required: true,
        type: String,
    },
    "portfolioWebsite": {
        type: String,

    },
    "portfolioSoftware": [],
    "portfolioDescription": {
        required: true,
        type: String,
    },
    "portfolioMainImage": {
        type: String,
    }
})

module.exports = mongoose.model('Portfolio', portfolioSchema);