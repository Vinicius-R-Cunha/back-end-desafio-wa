import { prisma } from "../../src/database";
import { faker } from "@faker-js/faker";

export async function populateFilmsTable(quantity: number = 1) {
  for (let i = 0; i < quantity; i++) {
    const data = {
      title: faker.commerce.productName(),
      movie_banner: faker.internet.url(),
      description: faker.commerce.productDescription(),
      director: faker.name.lastName(),
    };

    await prisma.films.create({
      data,
    });
  }
}
