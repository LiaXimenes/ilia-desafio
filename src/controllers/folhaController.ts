import { Request, Response } from "express";

import * as folhaService from "../services/folhaService";

export async function getFolhaDeContas(req: Request, res: Response) {
  const mes = req.params.mes.toString();
  try {
    let folhaDeConta = await folhaService.getFolhaDeContas(mes);

    if (!folhaDeConta) {
      res.status(404).send("Relatório não encontrado");
    }

    res.status(200).send(folhaDeConta);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}
