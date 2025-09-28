import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

import * as bcrypt from 'bcrypt'

@Entity('users')
export class UserEntity{
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({default : ''})
  email: string;

  @Column({default : ''})
  bio: string;

  @Column({default : ''})
  username: string;

  @Column({default : ''})
  image: string;

  @Column()
  passwrd: string;

  @BeforeInsert() 
  @BeforeUpdate() 
  async hashPassword() {
    if(this.passwrd) {
      const salt = await bcrypt.genSalt(10)
      this.passwrd = await bcrypt.hash(this.passwrd, salt)
    }
  }

}