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
import Clients from "./Clients";
import Cars from "./Cars";
import Users from "./Users";

@Entity()
export default class Rentals {
  @PrimaryGeneratedColumn("uuid")
  RentalID: string;

  @Column("uuid")
  FK_CarID: string;

  @Column("uuid")
  FK_UserID: string;

  @Column("uuid")
  FK_ClientID: string;

  @Column("date")
  StartDate: Date;

  @Column("date")
  EndDate: Date;

  @Column("double precision")
  TotalAmount: number;

  @ManyToOne(() => Cars, (c) => c.CarRentals)
  @JoinColumn({ referencedColumnName: "CarID", name: "FK_CarID" })
  RentalCar: Cars;

  @ManyToOne(() => Clients, (c) => c.ClientRentals)
  @JoinColumn({ referencedColumnName: "ClientID", name: "FK_ClientID" })
  RentalClient: Clients;

  @ManyToOne(() => Users, (u) => u.UserRentals)
  @JoinColumn({ referencedColumnName: "UserID", name: "FK_UserID" })
  RentalUser: Users;

  @OneToMany(() => Payments_Rentals, (pr) => pr.Rental)
  @JoinColumn({ referencedColumnName: "FK_RentalID", name: "RentalID" })
  RentalPayments: Payments_Rentals[];

  @OneToMany(() => Incidents, (i) => i.Rental)
  @JoinColumn({ referencedColumnName: "FK_RentalID", name: "RentalID" })
  RentalIncidents: Incidents[];
}
