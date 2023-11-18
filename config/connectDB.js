const uri = "mongodb+srv://<username>:<password>@cluster0.bqstehg.mongodb.net/HeliverseDB";

async function connectDB() {
    try {
        await mongoose.connect(uri);
        console.log("MongoDB connected");
    } catch (error) {
        console.log(`MongoDB error: ${error}`);
    }
}

module.exports = connectDB;