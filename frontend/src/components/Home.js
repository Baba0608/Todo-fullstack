import { useState } from "react";
import Todo from "./Todo";

let todos = [
  { id: 1, todo: "Learn React Js", completed: true },
  { id: 2, todo: "Learn Next Js", completed: false },
  { id: 3, todo: "Learn Java Script", completed: true },
  { id: 4, todo: "Learn Angular Js", completed: false },
];

const Home = () => {
  const [todoList, setTodoList] = useState(todos);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    setTodoList([
      ...todoList,
      { id: todoList.length + 1, todo: todo, completed: false },
    ]);

    setTodo("");
  };

  const updateTodo = (id, todoMsg) => {
    setTodoList((todoList) =>
      todoList.map((todo) => {
        if (todo.id === id) return { ...todo, todo: todoMsg };
        else return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodoList((todoList) => todoList.filter((todo) => todo.id !== id));
  };

  console.log(todoList);

  return (
    <div className="mt-10 flex justify-center">
      <div className="w-6/12 mt-5 shadow-lg shadow-gray-400 p-5 rounded-lg">
        <div className="flex justify-between mb-5">
          <input
            className="w-10/12 bg-white rounded-md p-1"
            value={todo}
            placeholder="enter todo..."
            onChange={(e) => setTodo(e.target.value)}
          />

          <button className="w-1/12 bg-blue-600 rounded-md" onClick={addTodo}>
            Add
          </button>
        </div>

        <hr className="border-b-2 border-gray-400 mb-5" />

        <div>
          {todoList.map((data) => (
            <Todo
              key={data.id}
              data={data}
              funcs={{ updateTodo, deleteTodo }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
