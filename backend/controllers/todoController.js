import {createTodoService,getTodosService,getTodoByIdService,updateTodoService,deleteTodoService,updateStatusService,searchTodoService,} from "../services/todoService.js";
export const createTodo = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).json({
        success: false,
        message: "Title is required",
      });
    }

    const todo = await createTodoService(req.body);

    res.status(201).json({
      success: true,
      data: todo,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const getTodos = async (req, res) => {
  try {
    const todos = await getTodosService();

    res.status(200).json({
      success: true,
      count: todos.length,
      data: todos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getTodoById = async (req, res) => {
  try {
    const todo = await getTodoByIdService(req.params.id);

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    res.status(200).json({
      success: true,
      data: todo,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    })
  }
}
export const updateTodo = async (req, res) => {
  try {
  const todo = await updateTodoService(
     req.params.id,
      req.body
    )
    if (!todo) {
    return res.status(404).json({
      message: "Todo not found",
      })
    }
    res.status(200).json({
   success: true,
      data: todo,
    })
  } catch (error) {
  res.status(500).json({
      message: error.message,
    })
  }
}
export const deleteTodo = async (req, res) => {
  try {
    const todo = await deleteTodoService(req.params.id);
    if (!todo) {
      return res.status(404).json({
        message: "Todo not found",
      })
    }
    res.status(200).json({
      success: true,
      message: "Todo deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const todo = await updateStatusService(
      req.params.id,
      status
    );

    res.status(200).json({
      success: true,
      data: todo,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const searchTodo = async (req, res) => {
  try {
    const todos = await searchTodoService(
      req.params.keyword
    );

    res.status(200).json({
      success: true,
      data: todos,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};