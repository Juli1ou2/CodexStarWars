import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Personnage } from './personnage.entity/personnage.entity';
import { PersonnagesController } from './personnages.controller';
import { PersonnagesService } from './personnages.service';

@Module({
  imports: [TypeOrmModule.forFeature([Personnage])],
  providers: [PersonnagesService],
  controllers: [PersonnagesController],
  exports: [PersonnagesService],
})
export class PersonnagesModule {}
