import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Payments_Rentals from "./Payments_Rentals";
import Incidents from "./Incidents";
import Client from "./Clients";
import Cars from "./Cars";

@Entity()
export default class Rentals {
  @PrimaryGeneratedColumn("uuid")
  RentalID: string;

  @Column("uuid")
  CarID: string;

  @Column("uuid")
  UserID: string;

  @Column("uuid")
  ClientID: string;

  @Column("date")
  StartDate: Date;

  @Column("date")
  EndDate: Date;

  @Column("double precision")
  TotalAmount: number;

  @ManyToOne(() => Cars, (c) => c.CarRentals)
  @JoinColumn({ referencedColumnName: "CarID", name: "CarID" })
  RentalCar: Cars;

  @ManyToOne(() => Client, (c) => c.ClientRentals)
  @JoinColumn({ referencedColumnName: "ClientID", name: "ClientID" })
  RentalClient: Client;

  @OneToMany(() => Payments_Rentals, (pr) => pr.Rental)
  @JoinColumn({ referencedColumnName: "RentalID", name: "RentalID" })
  RentalPayments: Payments_Rentals[];

  @OneToMany(() => Incidents, (i) => i.Rental)
  @JoinColumn({ referencedColumnName: "RentalID", name: "RentalID" })
  RentalIncidents: Incidents[];
}
