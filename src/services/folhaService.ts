// import { getRepository } from "typeorm";
import RegistroData from "../interface/registro";

export async function getFolhaDeContas(mes: string) {
  // const registro = await getRepository(Registro).find(mes);

  const registro: RegistroData = {
    dia: "2022-03-20",
    horarios: ["08:00:00", "12:00:00", "13:00:00", "18:00:00"],
  };

  const relatorio = {
    id: 50,
    mes: "03-2022",
    horasTrabalhadas: "PT20H35M5S",
    horasExcedentes: "PT6H21M5S",
    horasDevidas: "PT0S",
    registros: [registro],
  };

  return relatorio;
}
