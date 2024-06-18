import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Profile from "./Profiles";
import Stores from "./Stores";
import Rentals from "./Rentals";
import Sales from "./Sales";

@Entity()
export default class Users {
  @PrimaryGeneratedColumn("uuid")
  UserID: string;

  @Column("boolean")
  AdminFlag: boolean;

  @Column({ type: "varchar", length: 100 })
  Email: string;

  @Column({ type: "varchar", length: 12 })
  Password: string;

  @Column("uuid")
  FK_ProfileID: string;

  @Column("uuid")
  FK_StoreID: string;

  @ManyToOne(() => Profile, (p) => p.ProfileUsers)
  @JoinColumn({ referencedColumnName: "ProfileID", name: "FK_ProfileID" })
  UserProfile: Profile;

  @ManyToOne(() => Stores, (s) => s.StoreUsers)
  @JoinColumn({ referencedColumnName: "StoreID", name: "FK_StoreID" })
  UserStore: Stores;

  @OneToMany(() => Rentals, (r) => r.RentalUser)
  @JoinColumn({ referencedColumnName: "FK_UserID", name: "UserID" })
  UserRentals: Rentals[];

  @OneToMany(() => Sales, (s) => s.FK_UserID)
  @JoinColumn({ name: "UserID", referencedColumnName: "FK_UserID" })
  Sales: Sales[];
}
