const mongoose = require('mongoose');

//define schema

const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        min: 9,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 9,
        max: 255
    }
})
module.exports = mongoose.model('User', userSchema);