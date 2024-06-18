import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Payments_Rentals from "./Payments_Rentals";
import Clients from "./Clients";

@Entity()
export default class Payments {
  @PrimaryGeneratedColumn("uuid")
  PaymentID: string;

  @Column("uuid")
  FK_ClientID: string;

  @Column({ type: "uuid", nullable: true })
  RentalID: string;

  @Column("double precision")
  Amount: number;

  @Column("date")
  PaymentDate: Date;

  @OneToMany(() => Payments_Rentals, (pr) => pr.Payment)
  @JoinColumn({ referencedColumnName: "FK_RentalID", name: "RentalID" })
  PaymentRentals: Payments_Rentals[];

  @ManyToOne(() => Clients, c => c.ClientPayments)
  @JoinColumn({ referencedColumnName: 'ClientID', name: "FK_ClientID"})
  PaymentClient: Clients
}
