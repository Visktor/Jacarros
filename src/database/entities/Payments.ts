import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Payments_Rentals from "./Payments_Rentals";
import Client from "./Clients";

@Entity()
export default class Payments {
  @PrimaryGeneratedColumn("uuid")
  PaymentID: string;

  @Column("uuid")
  ClientID: string;

  @Column({ type: "uuid", nullable: true })
  RentalID: string;

  @Column("double precision")
  Amount: number;

  @Column("date")
  PaymentDate: Date;

  @OneToMany(() => Payments_Rentals, (pr) => pr.Payment)
  @JoinColumn({ referencedColumnName: "RentalID", name: "RentalID" })
  PaymentRentals: Payments_Rentals[];

  @ManyToOne(() => Client, c => c.ClientPayments)
  @JoinColumn({ referencedColumnName: 'ClientID', name: "ClientID"})
  PaymentClient: Client
}
