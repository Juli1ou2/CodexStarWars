import { Module } from '@nestjs/common';
import { OrganisationsController } from './organisations.controller';
import { OrganisationsService } from './organisations.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organisation } from './organisation.entity/organisation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Organisation])],
  controllers: [OrganisationsController],
  providers: [OrganisationsService],
  exports: [OrganisationsService]
})
export class OrganisationsModule {}
