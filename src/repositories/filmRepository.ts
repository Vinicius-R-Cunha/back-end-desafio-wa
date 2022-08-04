import { prisma } from "../database.js";
import { Films } from "@prisma/client";

export async function update(films: Films[]) {
  return await prisma.$transaction([
    prisma.films.deleteMany({}),
    prisma.films.createMany({ data: films }),
  ]);
}
