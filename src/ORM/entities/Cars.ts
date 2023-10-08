import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Rentals from "./Rentals";
import Stores from "./Stores";

@Entity()
export default class Cars {
  @PrimaryGeneratedColumn("uuid")
  CarID: string;

  @Column({ type: "varchar", length: 20 })
  Brand: string;

  @Column({ type: "varchar", length: 20 })
  Model: string;

  @Column("date")
  Year: string;

  @Column({ type: "varchar", length: 20 })
  Color: string;

  @Column("double precision")
  PricePerDay: number;

  @Column("double precision")
  PricePerMonth: number;

  @Column("boolean")
  IsAvailable: boolean;

  @OneToMany(() => Rentals, (r) => r.RentalCar)
  @JoinColumn({ referencedColumnName: "CarID", name: "CarID" })
  CarRentals: Rentals[];

  @ManyToOne(() => Stores, s => s.StoreCars)
  @JoinColumn({ referencedColumnName: 'StoreID', name: 'StoreID'})
  CarStore: Stores
}
