const User = require('../models/user.model');

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
        console.log(users)
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
}

const addUser = async (req, res) => {
    const user = new User(req.body);

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
        console.log(newUser)
    } catch (err) {
        res.status(400).json({ message: err.message});
    }
}

module.exports = { getUsers, addUser };