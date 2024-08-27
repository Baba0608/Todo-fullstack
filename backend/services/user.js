const User = require("../models/User");

const findUser = (userName) => {
  return User.find({ username: userName });
};

const createUser = (userName, password) => {
  return User.create({ username: userName, password: password });
};

module.exports = { findUser, createUser };
