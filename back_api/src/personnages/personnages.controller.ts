import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Personnage } from './personnage.entity/personnage.entity';
import { PersonnagesService } from './personnages.service';

@Controller('personnages')
export class PersonnagesController {
  constructor(private service: PersonnagesService) {}

  @Get()
  getAll() {
    return this.service.getPersonnages();
  }

  @Get(':id')
  get(@Param() params) {
    return this.service.getPersonnage(params.id);
  }

  @Post()
  create(@Body() personnage: Personnage) {
    return this.service.createPersonnage(personnage);
  }

  @Put()
  Update(@Body() personnage: Personnage) {
    return this.service.updatePersonnage(personnage);
  }

  @Delete(':id')
  delete(@Param() params) {
    return this.service.deletePersonnage(params.id);
  }
}
