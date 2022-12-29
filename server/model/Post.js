const mongoose = require("mongoose");

//define schema

const postSchema = mongoose.Schema({
        title: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        photo: {
            type: String,
            required: false
        },
        // userId: {
        //     type: Number,
        //     required: true,
        // }
        email: {
            type: String,
            required: [true, 'email required'],
            unique: true

        }
    }, { timestamps: true }

);
module.exports = mongoose.model("Post", postSchema);