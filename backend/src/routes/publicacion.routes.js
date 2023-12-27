import { Router } from "express";
import {createPublicacion, getPublicaciones} from "../controllers/publicacion.controller.js";

const router = Router();

// Routes
router.post("/", createPublicacion);
router.get("/", getPublicaciones);
router.put("/:id", );
router.delete("/:id", );
router.get("/:id", );


export default router;