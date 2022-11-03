const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');


const authRoute = require("./routes/user");
const postsRoute = require("./routes/posts");

//Middlewares
app.use(express.json());
app.use(cors());

//Route Middlewares
app.use("/api/user", authRoute);
app.use("/api/posts", postsRoute);

require("dotenv/config");

app.get("/", (req, res) => {
    res.send("sheesh");
});

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
    console.log("db connected");
});
app.listen(3800, () => {
    console.log("server running at port 3800");
});