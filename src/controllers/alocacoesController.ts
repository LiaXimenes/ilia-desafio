import { Request, Response } from "express";
import Joi from "joi";

import * as alocacaoService from "../services/alocacaoService";

const schema = Joi.object({
  dia: Joi.date().raw().required(),
  tempo: Joi.string().required(),
  nomeProjeto: Joi.string().min(10).required(),
});

export async function postAlocacao(req: Request, res: Response) {
  const validation = schema.validate(req.body);

  if (!validation.error) {
    try {
      const alocacao = req.body;
      const tempo = alocacao.tempo.slice(2, 3);
      //isso se aplica em casos como no exemplo PT2H30M0S
      //se a pessoa passar menos de 2 digitos para as horas, se tentar digitar 10h teriamos um problema, ou caso ela nao passe as horas
      //isso foi apenas uma solução rapida para o problema considerando que esse seja um padrao PT2H30M0S

      if (tempo > 8) {
        res
          .status(400)
          .send(
            "Mensagem: Não pode alocar tempo maior que o tempo trabalhado no dia"
          );
      }

      let resAlocacao = await alocacaoService.postAlocacao(alocacao);

      res.status(201).send(resAlocacao);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  } else {
    res.status(406).send("Necessário preencher todos os campos");

    // o que eu fiz de diferente: mensagem 406 especifica para falta de informação
    // acredito que poderiamos até fazer mensagem espeficia para cada item que falta
  }
}
