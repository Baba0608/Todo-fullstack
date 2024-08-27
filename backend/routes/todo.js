const express = require("express");

const authorization = require("../middlewares/auth");
const todoControllers = require("../controllers/todo");

const router = express.Router();

router.post("/add-todo", authorization, todoControllers.insertTodo);

router.get("/get-todos", authorization, todoControllers.getTodos);

module.exports = router;
