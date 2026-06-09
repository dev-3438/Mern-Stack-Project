import express from "express";
import {createTodo,getTodos,getTodoById,updateTodo,deleteTodo,updateStatus,searchTodo} from "../controllers/todoController.js";
const router = express.Router()
router.get("/", getTodos)
router.get("/search/:keyword", searchTodo)
router.get("/:id", getTodoById)
router.post("/", createTodo)
router.put("/:id", updateTodo)
router.patch("/:id/status", updateStatus)
router.delete("/:id", deleteTodo)
export default router;