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

  async getAstre(_id: number): Promise<Astre> {
    return await this.astreRepository
      .createQueryBuilder('astre')
      .where('astre.id = :id', { id: _id })
      .orderBy('astre.nom', 'ASC')
      .leftJoinAndSelect('astre.organisations', 'organisation')
      .getOne();
  }

  async getAstresByName(_nom: string): Promise<Astre[]> {
    return await this.astreRepository
      .createQueryBuilder('astre')
      .where('astre.nom like :nom', { nom: `%${_nom}%` })
      .orderBy('astre.nom', 'ASC')
      .getMany();
  }

  async createAstre(astre: Astre) {
    this.astreRepository.save(astre);
  }

  async createAstreOrganisationsRelation(
    astreId: number,
    organisationsIds: number[],
  ): Promise<Astre> {
    let astre: Astre;
    let organisation: Organisation;
    let organisations: Organisation[] = [];
    // on récupère l'astre en fonction de l'ID en paramètre
    astre = await this.getAstre(astreId);
    //on récupère les organisations en fonction des ID en paramètres et on les ajoute dans la liste
    for (let i = 0; i < organisationsIds.length; i++) {
      organisation = await this.organisationService.getOrganisation(
        organisationsIds[i],
      );
      organisations.push(organisation);
    }
    // on modifie les organisations de l'astre récupéré avec le tableau d'organisations
    astre.organisations = organisations;
    return await this.astreRepository.save(astre);
  }

  async updateAstre(astre: Astre) {
    this.astreRepository.save(astre);
  }

  async deleteAstre(astre: Astre) {
    this.astreRepository.delete(astre);
  }
}
