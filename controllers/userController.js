const userModel = require('../models/userModel');

exports.getUser = async (req, res) => {
    try {
        const usersModel =await userModel.find();
        res.send(usersModel);
    } catch (error) {
        console.error('Server Error', error);
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
        console.error('Server Error', error);
        res.status(500).send('Server Error',error);
    }
}

exports.searchUser = async (req, res) => {
    try {
        const { query, page } = req.query;
        const perPage = 20;

        const regex = new RegExp(query, 'i');

        const user = await userModel.find({first_name: regex} || {last_name: regex}).skip((page - 1) * perPage).limit(perPage);

        res.send(user);

    } catch (error) {
        console.error('Server Error', error);
        res.status(500).send('Server Error',error);
    }
}

exports.getUsersByGender = async (req, res) => {
    try {
        const { gender } = req.query;
        // console.log(gender);
        const filteredUsers = await userModel.find({ gender : gender });
        res.send(filteredUsers);
    } catch (error) {
        console.error('Server Error', error);
        res.status(500).send( 'Server Error', error);
    }
};

exports.getUsersByDomain = async (req, res) => {
    try {
        const { domain } = req.query;
         // console.log(gender);
        const filteredUsers = await userModel.find({ domain: domain });
        res.send(filteredUsers);
    } catch (error) {
        console.error('Server Error', error);
        res.status(500).send( 'Server Error', error);
    }
};

exports.getUsersByAvailability = async (req, res) => {
    try {
        const { available } = req.query;
        //  console.log(available);
        const filteredUsers = await userModel.find({ available: available });
        console.log('[filteredUsers]', filteredUsers);
    } catch (error) {
        console.error('Server Error', error);
        res.status(500).send( 'Server Error', error);
    }
};