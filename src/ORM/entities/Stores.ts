import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Stores {
  @PrimaryGeneratedColumn("uuid")
  StoreID: string;

  @Column({ type: "varchar", length: 18 })
  CNPJ: string;

  @Column({ type: "varchar", length: 100, nullable: true })
  Email: string;

  @Column('text')
  Address: string;
}
