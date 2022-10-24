const jwt = require("jsonwebtoken");

module.exports = function(req, res, next) { //middleware function due to next
    const token = req.header("auth-token");
    if (!token) return res.status(401).send("access denied");

    try {
        const verifyToken = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verifyToken;
        next();
    } catch (err) {
        res.send('access denied');
    }
}