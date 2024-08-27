const userServices = require("../services/user");
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, userObj) => {
      if (err) {
        // console.log(err);
        throw new Error("Something went wrong.");
      }

      const user = await userServices.findUser(userObj.userId);

      if (user) {
        req.user = user;
        next();
      } else {
        return res.status(404).json({ message: "User not found." });
      }
    });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
};

module.exports = auth;
