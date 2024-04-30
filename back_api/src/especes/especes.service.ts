import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Espece } from './espece.entity/espece.entity';
import { Personnage } from 'src/personnages/personnage.entity/personnage.entity';
import { PersonnagesService } from 'src/personnages/personnages.service';

@Injectable()
export class EspecesService {
  constructor(
    @InjectRepository(Espece)
    private especesRepository: Repository<Espece>,
    private personnageService: PersonnagesService,
  ) {}

  async getEspeces(): Promise<Espece[]> {
    return await this.especesRepository
      .createQueryBuilder('espece')
      .orderBy('espece.nom', 'ASC')
      .getMany();
  }

  async getEspecesByName(_nom: string): Promise<Espece[]> {
    return await this.especesRepository
      .createQueryBuilder('espece')
      .where('espece.nom like :nom', { nom: `%${_nom}%` })
      .orderBy('espece.nom', 'ASC')
      .getMany();
  }

  async getEspece(_id: number): Promise<Espece> {
    return await this.especesRepository
      .createQueryBuilder('espece')
      .where('espece.id = :id', { id: _id })
      .leftJoinAndSelect('espece.personnages', 'personnage')
      .getOne();
  }

  async createEspece(espece: Espece) {
    this.especesRepository.save(espece);
  }

  async createEspecePersonnagesRelation(
    especeId: number,
    personnagesIds: number[],
  ): Promise<Espece> {
    let espece: Espece;
    let personnage: Personnage;
    let personnages: Personnage[] = [];
    // on récupère l'espèce en fonction de l'ID en paramètre
    espece = await this.getEspece(especeId);
    //on récupère les personnages en fonction des ID en paramètres et on les ajoute dans la liste
    for (let i = 0; i < personnagesIds.length; i++) {
      personnage = await this.personnageService.getPersonnage(
        personnagesIds[i],
      );
      personnages.push(personnage);
    }
    // on modifie les personnages du véhicule récupéré avec le tableau des personnages
    espece.personnages = personnages;
    return await this.especesRepository.save(espece);
  }

  async updateEspece(espece: Espece) {
    this.especesRepository.save(espece);
  }

  async deleteEspece(espece: Espece) {
    this.especesRepository.delete(espece);
  }
}
