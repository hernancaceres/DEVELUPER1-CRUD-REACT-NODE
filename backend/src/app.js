import express from "express";
import morgan from "morgan";

const app = express();

// Import routes
import publicacionRoutes from "./routes/publicacion.routes.js";

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.get("/usuarios", (req, res) => {
    res.send("usuarios!");
});
app.use("/api/publicaciones", publicacionRoutes);

export default app;