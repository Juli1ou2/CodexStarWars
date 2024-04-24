import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehiculesModule } from './vehicules/vehicules.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganisationsModule } from './organisations/organisations.module';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
