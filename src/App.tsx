import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

interface Todo {
  text: string;
  completed: boolean;
}

function App() {
  const storedJSON = localStorage.getItem("todos");
  const initialTodos: Todo[] = storedJSON ? JSON.parse(storedJSON) : [];

  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  useEffect(() => {
    const storedTodos = JSON.parse(
      localStorage.getItem("todos") || "[]",
    ) as Todo[];
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo: string) => {
    if (newTodo) {
      setTodos([...todos, { text: newTodo, completed: false }]);
    }
  };

  const toggleComplete = (index: number) => {
    const newTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
