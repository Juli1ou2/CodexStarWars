import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 250 })
    firstname:string;

    @Column({ length: 250 })
    lastname:string;

    @Column({ length: 250 })
    email:string;

    @Column('text')
    password:string;

    @Column({length : 40})
    role:string;

}