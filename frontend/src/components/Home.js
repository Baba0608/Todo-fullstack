import { useEffect, useState } from "react";
import Todo from "./Todo";

import { GET_TODOS_API } from "../utils/constants";

import axios from "axios";
import useToken from "../utils/useToken";

const Home = () => {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");
  const token = useToken();

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

  const getTodos = async () => {
    const { data } = await axios.get(GET_TODOS_API, {
      headers: { authorization: token },
    });

    console.log(data.todos);
    setTodoList(data.todos);
  };

  useEffect(() => {
    getTodos();
  }, []);

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
          {todoList.length === 0 ? (
            <h1 className="flex justify-center">No todos available 😃</h1>
          ) : (
            todoList.map((data) => (
              <Todo
                key={data.id}
                data={data}
                funcs={{ updateTodo, deleteTodo }}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
