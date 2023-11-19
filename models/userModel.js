const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id: String,
    first_name: String,
    last_name: String,
    email: String,
    gender: String,
    avatar: String,
    domain: String,
    available: Boolean,
});

const UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;