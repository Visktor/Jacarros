import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Profile from "./Profiles";
import Stores from "./Stores";

@Entity()
export default class Users {
  @PrimaryGeneratedColumn("uuid")
  UsersID: string;

  @Column("boolean")
  AdminFlag: boolean;

  @Column({ type: "varchar", length: 100 })
  Email: string;

  @Column("uuid")
  ProfileID: string;

  @ManyToOne(() => Profile, (p) => p.ProfileUsers)
  @JoinColumn({ referencedColumnName: 'ProfileID', name: 'ProfileID'})
  UserProfile: Profile

  @ManyToOne(() => Stores, s => s.StoreUsers)
  @JoinColumn({ referencedColumnName: 'StoreID', name: "StoreID"})
  UserStore: Stores
}
