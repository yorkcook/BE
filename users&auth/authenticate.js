const jwt= require("jsonwebtoken")

const secret = require("../data/secrets");

module.exports = { authenticate };


function authenticate(req, res, next) {
  const token = req.headers.authorization;
  console.log("TOKEN", token)
  if (token) {
    jwt.verify(token, secret.jwtSecret, (err, decoded) => {
      if (err) {
        return res.status(500).json({message: "Error verifying password"});
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(401).json({ message: "No token provided" });
  }
}
