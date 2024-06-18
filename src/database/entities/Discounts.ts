import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Cars from "./Cars";
import Sales from "./Sales";

@Entity()
export default class Discounts {
  @PrimaryGeneratedColumn()
  DiscountID: string;

  @Column("date")
  DurationStart: Date;

  @Column("date")
  DurationEnd: Date;

  /**
   * 1: percentage
   * 2: flat discount
   * */
  @Column("smallint")
  Type: number;

  @Column("double precision")
  Value: number;

  @OneToMany(() => Cars, (c) => c.FK_DiscountID)
  @JoinColumn({ name: "DiscountID", referencedColumnName: "FK_DiscountID" })
  Cars: Cars[];

  @ManyToMany(() => Sales, (s) => s.SaleID)
  Sales: Sales[];
}
