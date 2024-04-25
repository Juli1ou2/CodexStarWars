import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Espece } from './espece.entity/espece.entity';

@Injectable()
export class EspecesService {
  constructor(
    @InjectRepository(Espece)
    private especesRepository: Repository<Espece>,
  ) {}

  async getEspeces(): Promise<Espece[]> {
    return await this.especesRepository.find();
  }

  async getEspece(_id: number): Promise<Espece> {
    return await this.especesRepository.findOne({
      where: [{ id: _id }],
    });
  }

  async createEspece(espece: Espece) {
    this.especesRepository.save(espece);
  }

  async updateEspece(espece: Espece) {
    this.especesRepository.save(espece);
  }

  async deleteEspece(espece: Espece) {
    this.especesRepository.delete(espece);
  }
}
