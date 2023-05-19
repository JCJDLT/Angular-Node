import { Router } from "express";
import user from "./user.routes.js";
import auth from "./auth.routes.js";
import tasks from "./tasks.routes.js";


const router = Router();

router.use("/users", user);
router.use("/auth", auth);
router.use("/tasks", tasks);

export default router;