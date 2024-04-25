import { Module } from '@nestjs/common';
import { AstresService } from './astres.service';
import { AstresController } from './astres.controller';

@Module({
  providers: [AstresService],
  controllers: [AstresController]
})
export class AstresModule {}
