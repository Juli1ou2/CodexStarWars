import { Module } from '@nestjs/common';
import { VehiculesController } from './vehicules.controller';
import { VehiculesService } from './vehicules.service';
import { Vehicule } from './vehicule.entity/vehicule.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganisationsModule } from 'src/organisations/organisations.module';
import { OrganisationsService } from 'src/organisations/organisations.service';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicule]), OrganisationsModule],
  controllers: [VehiculesController],
  providers: [VehiculesService]
})
export class VehiculesModule {}
