const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
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
    },
    portfolioContributors: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
})

module.exports = mongoose.model('Portfolio', portfolioSchema);