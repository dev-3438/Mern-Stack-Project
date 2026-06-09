import { useEffect, useState } from "react";
import API from "./services/api";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([])
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const getTodos = async () => {
    try {
      setLoading(true)
      setError("")
      const res = await API.get("/")
      setTodos(res.data.data)
    } catch (err) {
      setError("Failed to load tasks")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

const addTodo = async (
  title,
  description
) => {
  try {
    await API.post("/", {
      title,
      description,
    })
    getTodos()
  } catch (error) {
    console.log(error)
  }
}
  const deleteTodo = async (id) => {
    try {
      await API.delete(`/${id}`)

      getTodos()
    } catch (err) {
      setError("Failed to delete task")
      console.error(err)
    }
  };

  // Toggle Status
  const toggleStatus = async (todo) => {
    try {
      const newStatus =
        todo.status === "pending" ? "completed" : "Complete";
      await API.patch(`/${todo._id}/status`, {
        status: newStatus,
      })
      getTodos()
    } catch (err) {
      setError("Failed to update status");
      console.error(err);
    }
  }
  const searchTodo = async () => {
    try {
      if (!search.trim()) {
        getTodos();
        return;
      }
      const res = await API.get(
        `/search/${search}`
      );
      setTodos(res.data.data);
    } catch (err) {
      setError("Search failed");
      console.error(err);
    }
  }
  useEffect(() => {
    getTodos();
  }, []);

  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <h3>Loading...</h3>
      </div>
    )
  }

  return (
    <div
      className="container mt-5"
      style={{ maxWidth: "700px" }}
    >
      <h1 className="text-center mb-4">
        To-Do Manager
      </h1>
      {error && (
        <div className="alert alert-danger">
          {error}
        </div>
      )}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search Task..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
        <button
          className="btn btn-secondary mt-2"
          onClick={searchTodo}
        >
          Search
        </button>
      </div>
      <TodoForm addTodo={addTodo} />
      <div className="mb-3">
        <strong>
          Total Tasks: {todos.length} 
        </strong>
      </div>
      {todos.length === 0 ? (
        <div className="alert alert-info">
          No tasks found.
        </div>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleStatus={toggleStatus}
          />
        ))
      )}
    </div>
  );
}


export default App