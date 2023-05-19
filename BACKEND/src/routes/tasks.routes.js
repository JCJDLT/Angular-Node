import { Router } from "express";
import { verifyToken } from "../middlewares/verifyToken.middleware.js"
import { renderTasks, renderTasksPrivate } from "../controllers/tasks.controller.js";

const router = Router();

router.get('/public-tasks', renderTasks);

router.get('/private-tasks', verifyToken, renderTasksPrivate);

export default router;