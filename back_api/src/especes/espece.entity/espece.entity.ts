import { Astre } from 'src/astres/astre.entity/astre.entity';
import { Personnage } from 'src/personnages/personnage.entity/personnage.entity';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Espece {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 75 })
  nom: string;

  @Column('text')
  description: string;

  @Column({ length: 75 })
  classification: string;

  @Column({ length: 15 })
  taille: string;

  @Column({ length: 150 })
  couleurCorps: string;

  @Column({ length: 150 })
  couleurPoils: string;

  @Column({ length: 75 })
  habitat: string;

  @Column({ length: 75 })
  langage: string;

  @Column('text')
  image: string;

  //Espece récupère la clé de Personnage.
  @ManyToMany(() => Astre, (astre) => astre.especes)
  astres: Astre[];

  @OneToMany(() => Personnage, (personnage) => personnage.espece)
  personnages: Personnage[];
}
