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
    <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      {todo.text}
      <button onClick={toggleComplete}>
        {todo.completed ? "Oznacz jako nieukończone" : "Oznacz jako ukończone"}
      </button>
      <button onClick={deleteTodo}>Usuń</button>
    </li>
  );
}

export default TodoItem;
