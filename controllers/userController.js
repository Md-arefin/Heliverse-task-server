const userModel = require('../models/userModel');

exports.getUser = async (req, res) => {
    try {
        const users =await userModel.find();
        res.send(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}