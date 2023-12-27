import React from "react";

interface Todo {
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  toggleComplete: () => void;
  deleteTodo: () => void;
}

function TodoItem({ todo, toggleComplete, deleteTodo }: TodoItemProps) {
  return (
    <li className="flex justify-between items-center bg-gray-100 shadow mb-2">
      <span className={`ml-4 text-sm ${todo.completed ? "line-through" : ""}`}>
        {todo.text}
      </span>
      <div className="space-x-2">
        <button
          className={`rounded-lg px-4 py-2 border-2 ${
            todo.completed
              ? "border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-blue-100"
              : "border-green-600 text-green-600 hover:bg-green-600 hover:text-green-100"
          } duration-300`}
          onClick={toggleComplete}
        >
          {todo.completed ? "Nieukończone" : "Ukończ"}
        </button>
        <button
          className="rounded-lg px-4 py-2 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-red-100 duration-300"
          onClick={deleteTodo}
        >
          Usuń
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
