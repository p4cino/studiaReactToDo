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
  return (
    <ul>
      {todos.map((todo, index) => (
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
