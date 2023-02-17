// import { getRepository } from "typeorm";
import { Alocacao } from "../entities/alocacao";

export async function postAlocacao(alocacaoInfo: Alocacao) {
  // const alocacaoNova = await getRepository(Alocacao).insert(alocacaoInfo);

  const alocacaoNova = {
    id: 2,
    dia: alocacaoInfo.dia,
    tempo: alocacaoInfo.tempo,
    nomeProjeto: alocacaoInfo.nomeProjeto,
  };

  return alocacaoNova;
}
