import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Personnage } from './personnage.entity/personnage.entity';

@Injectable()
export class PersonnagesService {
  constructor(
    @InjectRepository(Personnage)
    private personnagesRepository: Repository<Personnage>,
  ) {}

  async getPersonnages(): Promise<Personnage[]> {
    return await this.personnagesRepository.find();
  }

  async getPersonnage(_id: number): Promise<Personnage> {
    return await this.personnagesRepository.findOne({
      where: [{ id: _id }],
    });
  }

  async createPersonnage(personnage: Personnage) {
    this.personnagesRepository.save(personnage);
  }

  async updatePersonnage(personnage: Personnage) {
    this.personnagesRepository.save(personnage);
  }

  async deletePersonnage(personnage: Personnage) {
    this.personnagesRepository.delete(personnage);
  }
}
