const userModel = require('../models/userModel');

exports.getUser = async (req, res) => {
    try {
        const usersModel =await userModel.find();
        res.send(usersModel);
    } catch (error) {
        res.status(500).send('Server Error',error);
    }
}

exports.getUserData = async (req, res) => {
    const page = parseInt(req.query.page) || 1; 
    const perPage = 20;
    try {
        const userData =await userModel.find().skip((page - 1) * perPage) .limit(perPage);
        res.send(userData);
    } catch (error) {
        res.status(500).send('Server Error',error);
    }
}