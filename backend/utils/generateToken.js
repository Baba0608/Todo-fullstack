const jwt = require("jsonwebtoken");

function generateToken(id, name) {
  return jwt.sign({ userId: id, name: name }, process.env.JWT_SECRET_KEY);
}

module.exports = generateToken;
