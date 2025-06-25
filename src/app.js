import express from "express";

const app = express();
import todoRoutes from "./routes/todoRoutes.js"

app.use(express.json());

app.use('/api/v1/todos', todoRoutes)


export default app;
