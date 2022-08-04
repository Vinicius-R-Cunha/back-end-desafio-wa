import supertest from "supertest";
import app from "../../src/app.js";
import { prisma } from "../../src/database";
import * as filmFactory from "../factories/filmFactory.js";

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

describe("GET /films", () => {
  beforeEach(truncateFilms);
  afterAll(disconnect);

  it("should return 200 and get all films", async () => {
    const FILM_QUANTITY = 53;
    await filmFactory.populateFilmsTable(FILM_QUANTITY);

    const films = await prisma.films.findMany();

    const response = await supertest(app).get("/films");

    expect(response.status).toBe(200);
    expect(films).toHaveLength(FILM_QUANTITY);
    expect(films).toEqual(response.body);
  });

  it("should return 200 and get first 10 films", async () => {
    const FILM_QUANTITY = 53;
    await filmFactory.populateFilmsTable(FILM_QUANTITY);

    const films = await prisma.films.findMany();

    const response = await supertest(app).get("/films?page=1");

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(10);
    expect(films.slice(0, 10)).toEqual(response.body);
  });

  it("should return 200 and get last 3 films", async () => {
    const FILM_QUANTITY = 53;
    await filmFactory.populateFilmsTable(FILM_QUANTITY);

    const films = await prisma.films.findMany();

    const response = await supertest(app).get("/films?page=6");

    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(3);
    expect(films.slice(-3)).toEqual(response.body);
  });
});

async function truncateFilms() {
  await prisma.$executeRaw`TRUNCATE TABLE films`;
}

async function disconnect() {
  await prisma.$disconnect();
}
