import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Cars from "./Cars";
import Users from "./Users";
import Clients from "./Clients";
import Discounts from "./Discounts";

@Entity()
export default class Sales {
  @PrimaryGeneratedColumn()
  SaleID: string;

  @Column("uuid")
  FK_CarID: string;

  /**
   * NOTE: This value is determined after sale, since it is
   * equal to the subtraction of the car's default sale price by any
   * discounts applied.
   * */

  @Column("double precision")
  FinalPrice: string;

  @Column("uuid")
  FK_DiscountID: string;

  @Column("date")
  Date: Date;

  @Column("uuid")
  FK_UserID: string;

  @Column("uuid")
  FK_ClientID: string;

  @OneToOne(() => Cars, (c) => c.FK_SaleID, { nullable: true })
  Car: Cars;

  @ManyToOne(() => Users, (u) => u.UserID)
  @JoinColumn({ name: "FK_UserID", referencedColumnName: "UserID" })
  User: Users;

  @ManyToOne(() => Clients, (c) => c.ClientID)
  @JoinColumn({ name: "FK_ClientID", referencedColumnName: "ClientID" })
  Client: Clients;

  @ManyToMany(() => Discounts, (d) => d.DiscountID)
  Discounts: Discounts[];
}
