// import { getRepository } from "typeorm";
import { Momento } from "../entities/momento";
import { Registro } from "../entities/registro";

export async function postBatida(batidaInfo: Momento) {
  // const registro = await getRepository(Registro).insert(batidaInfo);

  const registro = {
    id: 23,
    dia: "2022-03-20",
    horarios: ["08:00:00", "12:00:00", "13:00:00", "18:00:00"],
  };

  return registro;
}
