
function TodoItem({
  todo,
  deleteTodo,
  toggleStatus,
}) {
  return (
    <div className="card mb-2">
      <div className="card-body d-flex justify-content-between">
        <div>
  <h5>{todo.title}</h5>
<p>{todo.description}</p>
<p><strong>Status:</strong>{" "}
  {todo.status}
</p>
    </div>

    <div>
      <button
        className="btn btn-success me-2"
         onClick={() =>
          toggleStatus(todo)
            }
          >
            {todo.status=="completed"?"Completed":"not completed"}
          </button>

          <button
            className="btn btn-danger"
            onClick={() =>
              deleteTodo(todo._id)
            }
          >
            Delete
          </button>
        </div>

      </div>
    </div>
  );
}

export default TodoItem;