import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import Rentals from "./Rentals";
import Stores from "./Stores";
import Discounts from "./Discounts";
import Sales from "./Sales";

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

  @Column({ type: "double precision", nullable: true })
  SellingPrice: number;

  /**
   * NOTE: Both 'PricePerDay' and 'PricePerMonth' may be overwritten on the advent of
   * rental by a discount associated with the vehicle at the time.
   */
  @Column("double precision")
  PricePerDay: number;

  @Column("double precision")
  PricePerMonth: number;

  @Column("boolean")
  IsAvailable: boolean;

  @Column("uuid")
  FK_StoreID: string;

  @Column("uuid")
  FK_DiscountID: string;

  @Column("uuid")
  FK_SaleID: string;

  @OneToOne(() => Sales, (s) => s.FK_CarID, {
    nullable: true,
    onDelete: "SET NULL",
  })
  Sale: Sales;

  @OneToMany(() => Rentals, (r) => r.RentalCar)
  @JoinColumn({ referencedColumnName: "FK_CarID", name: "CarID" })
  CarRentals: Rentals[];

  @ManyToOne(() => Stores, (s) => s.StoreCars)
  @JoinColumn({ referencedColumnName: "StoreID", name: "FK_StoreID" })
  CarStore: Stores;

  @ManyToOne(() => Discounts, (s) => s.DiscountID)
  @JoinColumn({ referencedColumnName: "DiscountID", name: "FK_DiscountID" })
  Discounts: Discounts;
}
