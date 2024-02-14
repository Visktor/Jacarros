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
  ProfileID: string;

  @ManyToOne(() => Profile, (p) => p.ProfileUsers)
  @JoinColumn({ referencedColumnName: "ProfileID", name: "ProfileID" })
  UserProfile: Profile;

  @ManyToOne(() => Stores, (s) => s.StoreUsers)
  @JoinColumn({ referencedColumnName: "StoreID", name: "StoreID" })
  UserStore: Stores;

  @OneToMany(() => Rentals, (r) => r.RentalUser)
  @JoinColumn({ referencedColumnName: "UserID", name: "UserID" })
  UserRentals: Rentals[];
}
