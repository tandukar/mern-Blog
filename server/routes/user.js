const User = require("../model/User");
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const { registerValidation } = require("../validation");

router.post("/register", async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // HASHING PASSWORD
  const salt = await bcrypt.genSalt(10);
  const hashPwd = await bcrypt.hash(req.body.password, salt);

  const uniqueEmail = await User.findOne({email: req.body.email});
  if (!uniqueEmail) {
    const user = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      age: req.body.age,
      email: req.body.email,
      password: hashPwd,
    });
    try {
      const savedUser = await user.save();
      res.json(savedUser);
    } catch (err) {
      res.status(400).send(err.message);
    }
  } else {
    res.send("exists");
  }
});

router.get("/", async (req, res) => {
  try {
    const allUsers = await User.find();
    res.json(allUsers);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/find/:userId", async (req, res) => {
  try {
    const findUser = await User.findById(req.params.userId);
    res.json(findUser);
  } catch (err) {
    res.status(400).send("Error Encountred: " + err.message);
  }
});

router.patch("/updateUser/:userId", async (req, res) => {
  try {
    const updateUser = await User.updateMany(
      { _id: req.params.userId },
      {
        $set: {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          password: req.body.password,
          age: req.body.age,
          email: req.body.email,
        },
      }
    );
    res.send(updateUser);
  } catch (err) {
    res.status(400).send("Error Encountered: " + err.message);
  }
});

router.delete("/find/:userId", async (req, res) => {
  try {
    const delPost = await User.remove({ _id: req.params.userId });
    res.json(delPost);
  } catch (err) {
    res.json(err.message);
  }
});

module.exports = router;
