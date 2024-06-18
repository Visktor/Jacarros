import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Users from "./Users";
import Cars from "./Cars";

@Entity()
export default class Stores {
  @PrimaryGeneratedColumn("uuid")
  StoreID: string;

  @Column({ type: "varchar", length: 18 })
  CNPJ: string;

  @Column({ type: "varchar", length: 100, nullable: true })
  Email: string;

  @Column("text")
  Address: string;

  @OneToMany(() => Users, (u) => u.UserStore)
  @JoinColumn({ referencedColumnName: "FK_StoreID", name: "StoreID" })
  StoreUsers: Users[];

  @OneToMany(() => Cars, (c) => c.CarStore)
  @JoinColumn({ referencedColumnName: "FK_StoreID", name: "StoreID" })
  StoreCars: Cars[];
}
