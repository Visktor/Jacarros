import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Client {
  @PrimaryGeneratedColumn("uuid")
  ClientID: string;

  @Column({ type: "varchar", length: 100 })
  FullName: string;

  @Column({ type: "varchar", length: 100 })
  Email: string;

  @Column({ type: "varchar", length: 18 })
  ContactNumber: string;

  @Column({ type: "varchar", length: 100 })
  Address: string;
}
