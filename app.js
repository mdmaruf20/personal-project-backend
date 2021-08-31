const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/add-people', require('./peopleRoute'));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});

mongoose.connect('mongodb+srv://maruf326040:326040Maruf@cluster0.6n5az.mongodb.net/facebook',
    {useNewUrlParser: true}, 
    () => {
        console.log('DATABASE IS CONNECTED...');
    }
);