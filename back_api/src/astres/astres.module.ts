import { Module } from '@nestjs/common';
import { AstresService } from './astres.service';
import { AstresController } from './astres.controller';
import { Astre } from './astre.entity/astre.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganisationsModule } from 'src/organisations/organisations.module';

@Module({
  imports: [TypeOrmModule.forFeature([Astre]), OrganisationsModule],
  providers: [AstresService],
  controllers: [AstresController]
})
export class AstresModule {}
