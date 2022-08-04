import { prisma } from "../database.js";
import { Films } from "@prisma/client";

export async function update(films: Films[]) {
  return await prisma.$transaction([
    prisma.films.deleteMany({}),
    prisma.films.createMany({ data: films }),
  ]);
}

export async function get(skip: number) {
  return await prisma.films.findMany({
    skip,
    take: 10,
  });
}

export async function getAll() {
  return await prisma.films.findMany({});
}
