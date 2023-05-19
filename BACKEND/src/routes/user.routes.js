import { Router } from "express";
import { verifyToken } from "../middlewares/verifyToken.middleware.js"
import { renderProfile } from "../controllers/user.controller.js";

const router = Router();

router.get('/profile', verifyToken, renderProfile);

export default router;