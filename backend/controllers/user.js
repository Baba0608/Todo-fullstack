const generateToken = require("../utils/generateToken");

const userServices = require("../services/user");

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userServices.findUser(username);
    if (user) {
      if (user.password === password) {
        return res.status(200).json({
          success: true,
          message: "User Logged in successfully",
          token: generateToken(user.id, user.username),
        });
      } else {
        return res
          .status(401)
          .json({ success: false, message: "Password is incorrect" });
      }
    } else {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
};

const signup = async (req, res) => {
  const { username, password } = req.body;
  try {
    const details = await userServices.createUser(username, password);
    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: details,
    });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
};

module.exports = { login, signup };
