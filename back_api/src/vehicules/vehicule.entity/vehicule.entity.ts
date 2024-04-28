import { Organisation as Organisation } from 'src/organisations/organisation.entity/organisation.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

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

    @Column({ length: 100 })
    moteur:string;

    @Column({ length: 150 })
    armes:string;

    @Column()
    nbEquipage:number;

    @Column('text')
    image:string;

    @Column({ length: 100 })
    type:string;

    @ManyToMany(() => Organisation, (organisation) => organisation.vehicules, { cascade: true })
    @JoinTable()
    organisations: Organisation[]
}
