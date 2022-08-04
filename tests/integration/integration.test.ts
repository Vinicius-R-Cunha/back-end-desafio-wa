import supertest from "supertest";
import app from "../../src/app";
import { prisma } from "../../src/database";

describe("POST /films/update", () => {
  beforeEach(truncateFilms);
  afterAll(disconnect);

  it("should return 200 and update database data", async () => {
    const response = await supertest(app).post("/films/update").send({});

    const films = await prisma.films.findMany({});

    expect(response.status).toBe(200);
    expect(films.length).toBeGreaterThan(0);
  });
});

async function truncateFilms() {
  await prisma.$executeRaw`TRUNCATE TABLE films`;
}

async function disconnect() {
  await prisma.$disconnect();
}
