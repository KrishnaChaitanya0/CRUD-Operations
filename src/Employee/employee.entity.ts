import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm';
 
@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;
 
  @Column()
  name: string;
 
  @Column()
  salary: number;
 
  @Column()
  age: number;
}