import React, { useState } from "react";

function TodoForm({ addTodo }: { addTodo: (todo: string) => void }) {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 mb-2 max-w-xl mx-auto">
      <div className="flex items-center">
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          type="text"
          id="name"
          placeholder="Dodaj nowe zadanie"
          autoFocus
          className="flex-grow bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 duration-300"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
