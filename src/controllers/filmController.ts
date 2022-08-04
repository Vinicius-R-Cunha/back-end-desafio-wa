import { Request, Response } from "express";
import * as filmService from "../services/filmService.js";

export async function updateFilms(req: Request, res: Response) {
  await filmService.update();

  res.sendStatus(200);
}
