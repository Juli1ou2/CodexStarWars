
import { Espece } from 'src/especes/espece.entity/espece.entity';
import { Organisation } from 'src/organisations/organisation.entity/organisation.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class Astre {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 75})
  nom : string;

  @Column('text')
  description : string;

  @Column({length: 120})
  region : string;

  @Column({length: 120})
  systeme : string;

  @Column()
  nbLunes : number;

  @Column({length: 75})
  type : string;

  @Column({length: 15})
  diametre : string;

  @Column({length: 75})
  population : string;

  @Column('text')
  image : string;

  //Astre doit avoir les méthodes pour Organisation et Espece (table de relation)
  @ManyToMany(() => Organisation, (organisation) => organisation.astres, {cascade: true})
  @JoinTable()
  organisations: Organisation[];

  @ManyToMany(() => Espece, (espece) => espece.astres, {cascade: true})
  @JoinTable()
  especes: Espece[];
}