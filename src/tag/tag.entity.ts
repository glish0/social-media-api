import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tags') // <-- le nom exact de la table
export class TagEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}

