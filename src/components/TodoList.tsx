import React from "react";
import TodoItem from "./TodoItem";

interface Todo {
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  toggleComplete: (index: number) => void;
  deleteTodo: (index: number) => void;
}

function TodoList({ todos, toggleComplete, deleteTodo }: TodoListProps) {
  const sortedTodos = [...todos].sort(
    (a, b) => todos.indexOf(b) - todos.indexOf(a),
  );

  return (
    <ul className="w-full rounded-lg mt-2 mb-3 text-blue-800">
      {sortedTodos.map((todo, index) => (
        <TodoItem
          key={index}
          todo={todo}
          toggleComplete={() => toggleComplete(index)}
          deleteTodo={() => deleteTodo(index)}
        />
      ))}
    </ul>
  );
}

export default TodoList;
