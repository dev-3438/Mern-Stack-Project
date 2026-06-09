import Todo from "../models/Todo.js";

export const createTodoService = async (data) => {
  return await Todo.create(data)
}
export const getTodosService = async () => {
  return await Todo.find().sort({ createdAt: -1 })
}
export const getTodoByIdService = async (id) => {
  return await Todo.findById(id)
}
export const updateTodoService = async (id, data) => {
  return await Todo.findByIdAndUpdate(id, data, {
    new: true,
  })
}
export const deleteTodoService = async (id) => {
  return await Todo.findByIdAndDelete(id)
}
export const updateStatusService = async (id, status) => {
  return await Todo.findByIdAndUpdate(
    id,
    { status },
    { new: true }
  )
}
export const searchTodoService = async (keyword) => {
  return await Todo.find({
    title: {
      $regex: keyword,
      $options: "i",
    },
  })
}