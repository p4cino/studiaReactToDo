import React, { useState } from "react";

function TodoForm({ addTodo }: { addTodo: (todo: string) => void }) {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button type="submit">Dodaj zadanie</button>
    </form>
  );
}

export default TodoForm;
