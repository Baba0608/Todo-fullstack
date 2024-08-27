require("dotenv").config();

const express = require("express");

const sequelize = require("./utils/database");

const userRoutes = require("./routes/user");

const app = express();

app.use(express.json());

// app.use((req, res) => {
//   res.send("Hello world!");
// });

app.use("/user", userRoutes);

sequelize
  .sync()
  .then(() => {
    console.log("CONNECTED TO DATABASE");
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
