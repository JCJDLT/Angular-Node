import { Router } from "express";
import { renderImages , insertImages } from "../controllers/catalogue.controller.js";

const router = Router();

router.get("/", renderImages);
router.post("/", insertImages);


export default router;