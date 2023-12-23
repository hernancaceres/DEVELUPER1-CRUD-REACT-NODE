import express from "express";
import morgan from "morgan";

const app = express();

// Import routes


// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.get("/usuarios", (req, res) => {
    res.send("usuarios!");
});

export default app;