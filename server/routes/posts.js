const router = require("express").Router();
const verify = require('./verifytoken');

router.get("/", verify, (req, res) => {
    res.json({
        posts: {
            title: "first post",
            description: "should be logged in to see this",
        },
    });
});

module.exports = router;