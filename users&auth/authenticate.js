const secret = require("../data/secrets");
module.exports = { authenticate };


function authenticate(req, res, next) {
  const token = req.get("Authorization");
  if (token) {
    jwt.verify(token, secret.jwtSecret, (err, decoded) => {
      if (err) {
        return res.status().json(err);
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.status(401).json({ message: "No token provided" });
  }
}
