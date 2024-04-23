import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehiculesModule } from './vehicules/vehicules.module';
import { TypeOrmModule } from '@nestjs/typeorm';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
