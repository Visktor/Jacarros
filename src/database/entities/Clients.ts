import { Column, Entity,  JoinColumn,  OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Payments from "./Payments";
import Rentals from "./Rentals";

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

  @Column('text')
  Address: string;

  @OneToMany(() => Payments, p => p.PaymentClient)
  @JoinColumn({ referencedColumnName: 'ClientID', name: 'ClientID'})
  ClientPayments: Payments[]

  @OneToMany(() => Rentals, r => r.RentalClient)
  @JoinColumn({referencedColumnName: 'ClientID', name: 'ClientID'})
  ClientRentals: Rentals[]
}
