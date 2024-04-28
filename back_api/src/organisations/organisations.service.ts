import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Organisation } from './organisation.entity/organisation.entity';

@Injectable()
export class OrganisationsService {
  constructor(
    @InjectRepository(Organisation)
    private organisationsRepository: Repository<Organisation>,
  ) {}

  async getOrganisations(): Promise<Organisation[]> {
    return await this.organisationsRepository.find();
  }

  async getOrganisation(_id: number): Promise<Organisation> {
    return await this.organisationsRepository.findOne({
      where: [{ id: _id }],
    });
  }
  async getOrganisationsByName(_nom: string): Promise<Organisation[]> {
    return await this.organisationsRepository
      .createQueryBuilder('organisation')
      .where('organisation.nom like :nom', { nom: `%${_nom}%` })
      .orderBy('organisation.nom', 'ASC')
      .getMany();
  }

  async createOrganisation(organisation: Organisation) {
    this.organisationsRepository.save(organisation);
  }

  async updateOrganisation(organisation: Organisation) {
    this.organisationsRepository.save(organisation);
  }

  async deleteOrganisation(organisation: Organisation) {
    this.organisationsRepository.delete(organisation);
  }
}
