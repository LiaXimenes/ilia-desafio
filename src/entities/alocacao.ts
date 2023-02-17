import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Alocacao extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100 })
  dia!: string;

  @Column()
  tempo!: string;

  @Column({ length: 100 })
  nomeProjeto!: string;
}
