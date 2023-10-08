import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import Rentals from "./Rentals";
import Payments from "./Payments";

@Entity()
export default class Payments_Rentals {
  @PrimaryColumn("uuid")
  RentalID: string;

  @PrimaryColumn("uuid")
  PaymentID: string;

  @ManyToOne(() => Rentals, r => r.RentalPayments)
  @JoinColumn({ referencedColumnName: 'RentalID', name: 'RentalID' })
  Rental: Rentals

  @ManyToOne(() => Payments, r => r.PaymentRentals)
  @JoinColumn({ referencedColumnName: 'PaymentID', name: 'PaymentID' })
  Payment: Payments
}
