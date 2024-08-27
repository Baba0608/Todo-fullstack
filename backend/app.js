require("dotenv").config();

const express = require("express");
const cors = require("cors");

const sequelize = require("./utils/database");

const userRoutes = require("./routes/user");
const todoRoutes = require("./routes/todo");

const app = express();

app.use(express.json());
app.use(cors());

// app.use((req, res) => {
//   res.send("Hello world!");
// });

app.use("/user", userRoutes);
app.use("/todo", todoRoutes);

sequelize
  .sync()
  // .sync({ force: true })
  .then(() => {
    console.log("CONNECTED TO DATABASE");
    app.listen(3000, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
