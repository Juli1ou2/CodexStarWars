import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehicule } from './vehicule.entity/vehicule.entity';

@Injectable()
export class VehiculesService {

    constructor(@InjectRepository(Vehicule) private vehiculesRepository: Repository<Vehicule>) { }

    async getVehicules(): Promise<Vehicule[]> {
        return await this.vehiculesRepository.find();
    }

    // async getVehicule(_id: number): Promise<Vehicule> {
    //     return await this.vehiculesRepository.findOneBy({
    //         id: _id,
    //         //relations: ["organisations"],
    //     })[0];
    // }

    async getVehicule(_id: number): Promise<Vehicule> {
        return await this.vehiculesRepository.createQueryBuilder('vehicule')
        .where('vehicule.id = :id', { id: _id })
        .orderBy('vehicule.nom', 'ASC')
        .leftJoinAndSelect('vehicule.organisations', 'organisation')
        .getOne();
    }

    async createVehicule(vehicule: Vehicule) {
        this.vehiculesRepository.save(vehicule)
    }


    async updateVehicule(vehicule: Vehicule) {
        this.vehiculesRepository.save(vehicule)
    }

    async deleteVehicule(vehicule: Vehicule) {
        this.vehiculesRepository.delete(vehicule);
    }
}
