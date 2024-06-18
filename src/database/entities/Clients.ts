import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Payments from "./Payments";
import Rentals from "./Rentals";
import Sales from "./Sales";

@Entity()
export default class Clients {
  @PrimaryGeneratedColumn("uuid")
  ClientID: string;

  @Column({ type: "varchar", length: 100 })
  FullName: string;

  @Column({ type: "varchar", length: 100 })
  Email: string;

  @Column({ type: "varchar", length: 18 })
  ContactNumber: string;

  @Column("text")
  Address: string;

  @OneToMany(() => Payments, (p) => p.PaymentClient)
  @JoinColumn({ referencedColumnName: "FK_ClientID", name: "ClientID" })
  ClientPayments: Payments[];

  @OneToMany(() => Rentals, (r) => r.RentalClient)
  @JoinColumn({ referencedColumnName: "FK_ClientID", name: "ClientID" })
  ClientRentals: Rentals[];

  @OneToMany(() => Sales, (s) => s.FK_ClientID)
  @JoinColumn({ name: "ClientID", referencedColumnName: "FK_ClientID" })
  Sales: Sales[];
}
