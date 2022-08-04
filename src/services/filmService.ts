import axios from "axios";
import * as filmRepository from "../repositories/filmRepository.js";

export async function update() {
  const films = await axios.get(
    `${process.env.SOURCE_URL}?fields=title,movie_banner,description,director&limit=50`
  );

  await filmRepository.update(films.data);

  return;
}

export async function get(page: number) {
  if (!page) {
    return await filmRepository.getAll();
  }

  const skip = (page - 1) * 10;
  return await filmRepository.get(skip);
}
