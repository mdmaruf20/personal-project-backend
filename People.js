const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newPeople = new Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    }
});

const People = mongoose.model('people', newPeople);

module.exports = People;