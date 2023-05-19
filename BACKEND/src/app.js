import express from "express";
import router from "./routes/index.js";
import cors from "cors";

// Intializations
const app = express();
app.disable("x-powered-by");

// Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use(router);

export default app;