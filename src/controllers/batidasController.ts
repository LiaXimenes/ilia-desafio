import { Request, Response } from "express";
import Joi from "joi";

import * as batidasService from "../services/batidasService";

const schema = Joi.object({
  momento: Joi.date().raw().required(),
});

export async function postBatida(req: Request, res: Response) {
  if (req.body.momento === undefined) {
    res.status(400).send("Campo obrigatório não informado");
  }

  const validation = schema.validate(req.body);

  if (!validation.error) {
    try {
      const batida = req.body;

      const registro = await batidasService.postBatida(batida);

      if (registro.id && registro.dia && registro.horarios) {
        res.status(201).send(registro);
      }

      if (registro.id && !registro.dia && !registro.horarios) {
        res.status(409).send("Horário já registrado");
      }
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  } else {
    res.status(400).send("Data e hora em formato inválido");
  }
}
