import { Router } from "express";
import { renderAuth, signup, signin } from "../controllers/auth.controller.js";

const router = Router();

router.get("/", renderAuth);

router.post("/signup", signup)

router.post("/signin", signin);

export default router;