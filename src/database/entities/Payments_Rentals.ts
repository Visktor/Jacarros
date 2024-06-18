import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import Rentals from "./Rentals";
import Payments from "./Payments";

@Entity()
export default class Payments_Rentals {
  @PrimaryColumn("uuid")
  FK_RentalID: string;

  @PrimaryColumn("uuid")
  FK_PaymentID: string;

  @ManyToOne(() => Rentals, r => r.RentalPayments)
  @JoinColumn({ referencedColumnName: 'RentalID', name: 'FK_RentalID' })
  Rental: Rentals

  @ManyToOne(() => Payments, r => r.PaymentRentals)
  @JoinColumn({ referencedColumnName: 'PaymentID', name: 'FK_PaymentID' })
  Payment: Payments
}
