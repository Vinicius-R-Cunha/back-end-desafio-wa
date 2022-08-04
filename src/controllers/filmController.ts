import { Request, Response } from "express";
import * as filmService from "../services/filmService.js";

export async function updateFilms(req: Request, res: Response) {
  await filmService.update();

  res.sendStatus(200);
}

export async function getFilms(req: Request, res: Response) {
  const { page } = req.query;

  const films = await filmService.get(+page);

  res.status(200).send(films);
}
