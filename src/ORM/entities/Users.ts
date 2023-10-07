import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Profile from "./Profiles";

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
}
