const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const port  = process.env.port || 5000;
const connectDB = require('./config/connectDB');
const userRouter = require('./routes/userRouter');

// middleware
app.use(cors());
app.use(express.json());


app.get('/', (req, res) =>{
    res.send('Heliverse server is running')
})

app.use(userRouter);

app.listen(port, () =>{
    console.log(`server is running on port: ${port}`)
    connectDB();
})