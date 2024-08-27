import { useState } from "react";

const Todo = ({
  data: { id, todoItem, completed },
  funcs: { updateTodo, deleteTodo },
}) => {
  const [isCompleted, setIsCompleted] = useState(completed);
  const [isEditing, setIsEditing] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todoItem);

  const checkTodo = () => {
    setIsCompleted(!isCompleted);
  };

  const changeText = (e) => {
    setTodoMsg(e.target.value);
  };

  const handleTodoChange = (e) => {
    if (e.key === "Enter") {
      setIsEditing(false);
      updateTodo(id, todoMsg);
    }
  };

  const handleDeleteTodo = () => {
    deleteTodo(id);
  };

  return (
    <div className="flex justify-between my-2">
      <div
        className={`w-10/12 rounded-md py-1 px-2 flex ${
          isCompleted ? "bg-green-300" : "bg-red-300"
        }`}
      >
        <input type="checkbox" checked={isCompleted} onChange={checkTodo} />
        <input
          type="text"
          autoFocus="on"
          className={`mx-2 px-2 focus:outline-none w-full border border-b rounded-md ${
            isCompleted ? "bg-green-300" : "bg-red-300"
          } ${isEditing ? "border-gray-400" : "border-transparent"}`}
          value={todoMsg}
          onKeyUp={handleTodoChange}
          onChange={changeText}
          readOnly={!isEditing}
        />
      </div>
      <div className="w-2/12 flex justify-around">
        <button
          className="w-4/12"
          disabled={isCompleted}
          onClick={() => {
            setIsEditing(!isEditing);
          }}
        >
          {isEditing ? "✅" : "✏️"}
        </button>
        <button className="w-4/12" onClick={handleDeleteTodo}>
          ❌
        </button>
      </div>
    </div>
  );
};

export default Todo;
