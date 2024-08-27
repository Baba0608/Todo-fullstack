const userServices = require("../services/user");

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userServices.findUser(username);
    if (user) {
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
