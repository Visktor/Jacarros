import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

  @Column('boolean')
  IsAvailable: boolean;
}
