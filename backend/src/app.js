import express from "express";
import morgan from "morgan";
import cors from "cors";
import {FRONTEND_URL} from "./config.js"

const app = express();

// Import routes
import publicacionRoutes from "./routes/publicacion.routes.js";

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

app.use(cors({
    origin: FRONTEND_URL,  // Reemplaza con la URL de tu aplicación de React
    credentials: true,
}));

// Routes
app.get("/usuarios", (req, res) => {
    res.send("usuarios!");
});
app.use("/api/publicaciones", publicacionRoutes);

export default app;