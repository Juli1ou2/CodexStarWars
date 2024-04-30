import { Module } from '@nestjs/common';
import { EspecesController } from './especes.controller';
import { EspecesService } from './especes.service';
import { Espece } from './espece.entity/espece.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonnagesModule } from 'src/personnages/personnages.module';
import { PersonnagesService } from 'src/personnages/personnages.service';

@Module({
  imports: [TypeOrmModule.forFeature([Espece]), PersonnagesModule],
  controllers: [EspecesController],
  providers: [EspecesService]
})
export class EspecesModule {}
