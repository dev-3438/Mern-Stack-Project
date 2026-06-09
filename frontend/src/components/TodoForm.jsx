import { useState } from "react";

function TodoForm({ addTodo }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    addTodo(title, description);

    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="form-control mb-2"
        placeholder="Task Description"
        rows="3"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)
        }
      />

      <button className="btn btn-primary">
        Add Task
      </button>
    </form>
  );
}

export default TodoForm;