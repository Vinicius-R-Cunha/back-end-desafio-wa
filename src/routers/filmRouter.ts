import { Router } from "express";
import { getFilms, updateFilms } from "../controllers/filmController.js";

const filmRouter = Router();

filmRouter.post("/films/update", updateFilms);
filmRouter.get("/films", getFilms);

export default filmRouter;
