import supertest from "supertest";
import app, { init } from "../src/app";
import { getConnection } from "typeorm";

beforeAll(async () => {
  await init();
});

afterAll(async () => {
  await getConnection().close();
});

describe("POST /v1/batidas", () => {
  it("should return status 200", async () => {
    const momento = {
      momento: "2018-08-22T08:00:00",
    };

    const response = await await supertest(app)
      .post("/v1/batidas")
      .send(momento);
    expect(response.status).toBe(201);
  });

  it("should return status 400", async () => {
    const momento = {
      momento: "string",
    };

    const response = await await supertest(app)
      .post("/v1/batidas")
      .send(momento);
    expect(response.status).toBe(400);
  });

  it("should return status 400", async () => {
    const response = await await supertest(app)
      .post("/v1/batidas")
      .send(undefined);
    expect(response.status).toBe(400);
  });

  it("should return status 409", async () => {
    const momento = {
      momento: "2018-08-22T08:00:00",
    };

    const response1 = await await supertest(app)
      .post("/v1/batidas")
      .send(momento);
    const response2 = await await supertest(app)
      .post("/v1/batidas")
      .send(momento);
    expect(response2.status).toBe(409);
  });
});
