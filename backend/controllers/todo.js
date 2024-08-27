const todoServices = require("../services/todo");

const insertTodo = async (req, res) => {
  const { todo } = req.body;
  const {
    dataValues: { id },
  } = req.user;

  //   console.log(req.user.dataValues);

  try {
    const data = await todoServices.insertTodo(todo, id);
    return res
      .status(201)
      .json({ success: true, data, message: "Todo created" });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
};

const getTodos = async (req, res) => {
  try {
    const {
      dataValues: { id },
    } = req.user;

    const todos = await todoServices.getTodos(id);
    return res.status(200).json({ success: true, todos });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong" });
  }
};

module.exports = { insertTodo, getTodos };
