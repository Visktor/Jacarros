import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Rentals from "./Rentals";

@Entity()
export default class Incidents {
  @PrimaryGeneratedColumn("uuid")
  IncidentID: string;

  @Column("uuid")
  RentalID: string;

  @Column("text")
  Description: string;

  @Column("double precision")
  Cost: number;

  @ManyToOne(() => Rentals, r => r.RentalIncidents)
  @JoinColumn({ referencedColumnName: 'RentalID', name: "RentalID"})
  Rental: Rentals
}
