const mongoose = require("mongoose");
require('dotenv').config();

const uri = `mongodb+srv://${process.env.USER_Name}:${process.env.PASSWORD}@cluster0.bqstehg.mongodb.net/HeliverseDB`;

async function connectDB() {
    try {
        await mongoose.connect(uri);
        console.log("MongoDB connected");
    } catch (error) {
        console.log(`MongoDB error: ${error}`);
    }
}

module.exports = connectDB;