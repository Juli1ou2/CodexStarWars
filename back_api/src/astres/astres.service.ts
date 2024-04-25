import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Astre } from './astre.entity/astre.entity';
import { Organisation } from 'src/organisations/organisation.entity/organisation.entity';
import { OrganisationsService } from 'src/organisations/organisations.service';

@Injectable()
export class AstresService {
  constructor(
    @InjectRepository(Astre)
    private astreRepository: Repository<Astre>,
    private organisationService: OrganisationsService,
  ) {}

  async getAstres(): Promise<Astre[]> {
    return await this.astreRepository.find();
  }

  async getVehicule(_id: number): Promise<Astre> {
    return await this.vehiculesRepository
      .createQueryBuilder('vehicule')
      .where('vehicule.id = :id', { id: _id })
      .orderBy('vehicule.nom', 'ASC')
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
