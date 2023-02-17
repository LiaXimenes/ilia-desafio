import "reflect-metadata";
import "./setup";
import express from "express";
import cors from "cors";

// import connectDB from "../config/ormconfig";

import * as alocacaoController from "./controllers/alocacoesController";
import * as folhaController from "./controllers/folhaController";
import * as batidasController from "./controllers/batidasController";

const app = express();
app.use(cors());
app.use(express.json());

// export async function init() {
//   await connectDB();
// }

app.post("/v1/batidas", batidasController.postBatida);

app.post("/v1/alocacoes", alocacaoController.postAlocacao);

app.get("/v1/folhas-de-ponto/:mes", folhaController.getFolhaDeContas);

export default app;
