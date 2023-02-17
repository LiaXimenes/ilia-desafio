import supertest from "supertest";
import app, { init } from "../src/app";
import { getConnection } from "typeorm";

import AlocacaoData from "../src/interface/alocacao";

beforeAll(async () => {
  await init();
});

afterAll(async () => {
  await getConnection().close();
});

describe("POST /v1/alocacoes", () => {
  it("should return status 200", async () => {
    const alocacaoNova: AlocacaoData = {
      dia: "2018-08-22",
      tempo: "PT2H30M0S",
      nomeProjeto: "Lia's Project",
    };

    const response = await await supertest(app)
      .post("/v1/alocacoes")
      .send(alocacaoNova);
    expect(response.status).toBe(201);
  });

  it("should return status 406 if missing any parameter", async () => {
    const alocacaoNova = {
      dia: "2018-08-22",
      tempo: "PT2H30M0S",
    };

    const response = await await supertest(app)
      .post("/v1/alocacoes")
      .send(alocacaoNova);
    expect(response.status).toBe(406);
  });

  it("should return status 400", async () => {
    const alocacaoNova: AlocacaoData = {
      dia: "2018-08-22",
      tempo: "PT2H30M0S",
      nomeProjeto: "Lia's Project",
    };

    const response = await await supertest(app)
      .post("/v1/alocacoes")
      .send(undefined);
    expect(response.status).toBe(400);
  });
});
