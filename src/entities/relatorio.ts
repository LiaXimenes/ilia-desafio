import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";
import RegistroData from "../interface/registro";

@Entity()
export class Relatorio extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100 })
  mes!: string;

  @Column()
  horasTrabalhadas!: string;

  @Column()
  horasExcedentes!: string;

  @Column()
  horasDevidas!: string;

  @Column()
  registros!: [RegistroData];
}
