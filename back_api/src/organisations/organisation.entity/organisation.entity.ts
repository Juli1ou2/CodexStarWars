import { Vehicule } from 'src/vehicules/vehicule.entity/vehicule.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

@Entity()
export class Organisation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 100})
  nom: string;

  @Column('text')
  description: string;

  @Column('text')
  image: string;

  @ManyToMany(() => Vehicule, (vehicule) => vehicule.organisations)
    vehicules: Vehicule[]
}
