const User = require("../model/User");
const router = require("express").Router();

router.post("/register", async(req, res) => {
    const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        age: req.body.age,
        email: req.body.email,
        password: req.body.password,
    });
    try {
        const savedUser = await user.save();
        res.json(savedUser);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.get("/", async(req, res) => {
    try {
        const allUsers = await User.find();
        res.json(allUsers);
    } catch (err) {
        res.json({ message: err });
    }
});

router.get("/find/:userId", async(req, res) => {
    try {
        const findUser = await User.findById(req.params.userId);
        res.json(findUser);
    } catch (err) {
        res.status(400).send("Error Encountred: " + err.message);
    }
});

router.patch("/updateUser/:userId", async(req, res) => {
    try {
        const updateUser = await User.updateMany({ _id: req.params.userId }, {
            $set: {
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                password: req.body.password,
                age: req.body.age,
                email: req.body.email,
            },
        });
        res.json(updateUser);
    } catch (err) {
        res.status(400).send("Error Encountered: " + err.message);
    }
});



//delete specific post
router.delete('/find/:userId', async(req, res) => {
    try {
        const delPost = await User.remove({ _id: req.params.userId });
        res.json(delPost)
    } catch (err) {
        res.json(err.message);
    }


});

module.exports = router;