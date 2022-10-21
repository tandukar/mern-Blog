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
        res.status(400).send('Error Encountred: ' + err.message);
    }
})

module.exports = router;