import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Personnage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 75 })
  nom: string;

  @Column('text')
  description: string;

  @Column({ length: 75 })
  alias: string;

  @Column({ length: 15 })
  date_de_naissance: string;

  @Column({ length: 75 })
  lieu_de_naissance: string;

  @Column({ length: 75 })
  date_de_mort: string;

  @Column({ length: 75 })
  lieu_de_mort: string;

  @Column('text')
  image: string;

  @Column({ length: 75 })
  genre: string;
}
