import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Vehicule{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 75 })
    nom:string;

    @Column('text')
    description:string;

    @Column({ length: 10 })
    longueur:string;

    @Column({ length: 10 })
    vitesse:string;

    @Column({ length: 50 })
    classe:string;

    @Column({ length: 50 })
    moteur:string;

    @Column({ length: 150 })
    armes:string;

    @Column('text')
    image:string;

    @Column({ length: 100 })
    type:string;
}
