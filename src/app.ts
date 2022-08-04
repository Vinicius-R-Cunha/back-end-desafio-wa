import "./setup.js";
import express from "express";
import cors from "cors";
import "express-async-errors";
import handleErrorsMiddleware from "./middlewares/handleErrorsMiddleware.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(handleErrorsMiddleware);

export default app;
