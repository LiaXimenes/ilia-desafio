import RegistroData from "./registro";

interface RelatorioData {
  mes: string;
  horasTrabalhadas: string;
  horasExcedentes: string;
  horasDevidas: string;
  registros: RegistroData[];
}

export default RelatorioData;
