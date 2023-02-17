import supertest from "supertest";
import app, { init } from "../src/app";
import { getConnection } from "typeorm";

beforeAll(async () => {
  await init();
});

afterAll(async () => {
  await getConnection().close();
});

describe("GET /v1/folhas-de-ponto/:mes", () => {
  it("should return status 200 and object", async () => {
    const response = await supertest(app).get("/v1/folhas-de-ponto/2018-08");
    expect(response.status).toBe(200);
    expect(response.body.length).not.toBe(0);
  });

  it("should return status 400 and empty object", async () => {
    const response = await supertest(app).get("/v1/folhas-de-ponto/3020-08");
    expect(response.status).toBe(400);
    expect(response.body.length).toBe(0);
  });
});
