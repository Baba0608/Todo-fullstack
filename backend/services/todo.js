const Todo = require("../models/Todo");

const insertTodo = (todo, id) => {
  return Todo.create({ todoItem: todo, userId: id });
};

const getTodos = (id) => {
  return Todo.findAll({
    where: { userId: id },
    attributes: ["id", "todoItem", "completed"],
  });
};

module.exports = { insertTodo, getTodos };
