const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    "firstName": {
        require: true,
        type: String,
    },
    "lastName": {
        require: true,
        type: String,
    },
    "email": {
        require: true,
        type: String,
    },
    "password": {
        require: true,
        type: String,
    },
})

module.exports = mongoose.model("User", userSchema);