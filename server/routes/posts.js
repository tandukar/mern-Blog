// const router = require("express").Router();
// const verify = require('./verifytoken');

// router.get("/", verify, (req, res) => {
//     res.json({
//         posts: {
//             title: "first post",
//             description: "should be logged in to see this",
//         },
//     });
// });

// module.exports = router;

const User = require("../model/User");
const Post = require("../model/Post");
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../validation");

//post blog
router.post("/", async(req, res) => {
    const posts = new Post({
        title: req.body.title,
        desc: req.body.desc,
        photo: req.body.photo,
        email: req.body.email,
    });
    try {
        const savedPosts = await posts.save();
        res.json("posts");
    } catch (err) {
        res.status(400).send(err.message);
    }
});

//retrieve all posts
router.get("/blogs", async(req, res) => {
    try {
        const allPosts = await Post.find();
        res.json(allPosts);
    } catch (err) {
        res.json(err);
    }
});

//update post
router.patch("/updateUser/:userId", async(req, res) => {});

//delete post
router.delete("/find/:userId", async(req, res) => {});

module.exports = router;