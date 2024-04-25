import { Module } from '@nestjs/common';
import { EspecesService } from './especes.service';
import { EspecesController } from './especes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Espece } from './espece.entity/espece.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Espece])],
  providers: [EspecesService],
  controllers: [EspecesController],
  exports: [EspecesService]
})
export class EspecesModule {}
