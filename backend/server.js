import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import todoRoutes from "./routes/todoRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/todos", todoRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Todo API Running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});