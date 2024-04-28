import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehiculesModule } from './vehicules/vehicules.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganisationsModule } from './organisations/organisations.module';
import { EspecesModule } from './especes/especes.module';
import { AstresModule } from './astres/astres.module';
import { PersonnagesModule } from './personnages/personnages.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'codex_star_wars_nest_angular',
      entities: ['dist/**/**.entity{.ts,.js}'],
      synchronize: true,
    }),
    VehiculesModule,
    OrganisationsModule,
    EspecesModule,
    AstresModule,
    PersonnagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
