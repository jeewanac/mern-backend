const express = require('express');
const app = express();
const cors = require('cors');
const port = 3002;
const host = 'localhost';
const mongoose = require('mongoose');
const router = require('./router');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://jc1234:BFchCfm1OryZougg@cluster0.6nigo3x.mongodb.net/?retryWrites=true&w=majority';

const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log('connected to Mongoose');
    } catch (error) {
        console.log('mongoDB error', error);
    }
};

connect();
const server = app.listen(port, host, () => {
    console.log(`Node Server is listening to ${server.address().port}`);
});

app.use('/api', router);