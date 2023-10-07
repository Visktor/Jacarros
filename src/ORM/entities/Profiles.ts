import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Users from "./Users";

@Entity()
export default class Profile {
  @PrimaryGeneratedColumn("uuid")
  ProfileID: string;

  @Column("text")
  Description: string;

  @OneToMany(() => Users, u => u.UserProfile)
  @JoinColumn({ referencedColumnName: 'ProfileID', name: 'ProfileID'})
  ProfileUsers: Users[]
}
