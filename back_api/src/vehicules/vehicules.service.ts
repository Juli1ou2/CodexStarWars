import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehicule } from './vehicule.entity/vehicule.entity';
import { Organisation } from 'src/organisations/organisation.entity/organisation.entity';
import { OrganisationsService } from 'src/organisations/organisations.service';

@Injectable()
export class VehiculesService {
  constructor(
    @InjectRepository(Vehicule)
    private vehiculesRepository: Repository<Vehicule>,
    private organisationService: OrganisationsService,
  ) {}

  async getVehicules(): Promise<Vehicule[]> {
    return await this.vehiculesRepository
      .createQueryBuilder('vehicule')
      .orderBy('vehicule.nom', 'ASC')
      .getMany();
  }

  async getVehiculesByName(_nom: string): Promise<Vehicule[]> {
    return await this.vehiculesRepository
      .createQueryBuilder('vehicule')
      .where('vehicule.nom like :nom', { nom: `%${_nom}%` })
      .orderBy('vehicule.nom', 'ASC')
      .getMany();
  }

  async getVehicule(_id: number): Promise<Vehicule> {
    return await this.vehiculesRepository
      .createQueryBuilder('vehicule')
      .where('vehicule.id = :id', { id: _id })
      .leftJoinAndSelect('vehicule.organisations', 'organisation')
      .getOne();
  }

  async createVehicule(vehicule: Vehicule) {
    this.vehiculesRepository.save(vehicule);
  }

  async createVehiculeOrganisationsRelation(
    vehiculeId: number,
    organisationsIds: number[],
  ): Promise<Vehicule> {
    let vehicule: Vehicule;
    let organisation: Organisation;
    let organisations: Organisation[] = [];
    // on récupère le véhicule en fonction de l'ID en paramètre
    vehicule = await this.getVehicule(vehiculeId);
    //on récupère les organisations en fonction des ID en paramètres et on les ajoute dans la liste
    for (let i = 0; i < organisationsIds.length; i++) {
      organisation = await this.organisationService.getOrganisation(
        organisationsIds[i],
      );
      organisations.push(organisation);
    }
    // on modifie les organisations du véhicule récupéré avec le tableau d'organisations
    vehicule.organisations = organisations;
    return await this.vehiculesRepository.save(vehicule);
  }

  async updateVehicule(vehicule: Vehicule) {
    this.vehiculesRepository.save(vehicule);
  }

  async deleteVehicule(vehicule: Vehicule) {
    this.vehiculesRepository.delete(vehicule);
  }
}
