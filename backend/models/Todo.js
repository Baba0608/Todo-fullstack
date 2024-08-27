const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const Todo = sequelize.define("todo", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },

  todoItem: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  completed: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

module.exports = Todo;
