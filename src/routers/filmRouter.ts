import { Router } from "express";
import { updateFilms } from "../controllers/filmController.js";

const filmRouter = Router();

filmRouter.post("/films/update", updateFilms);

export default filmRouter;
