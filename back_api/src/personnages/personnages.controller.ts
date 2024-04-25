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
  create(@Body() typeuser: Personnage) {
    return this.service.createPersonnage(typeuser);
  }

  @Put()
  Update(@Body() typeuser: Personnage) {
    return this.service.updatePersonnage(typeuser);
  }

  @Delete(':id')
  delete(@Param() params) {
    return this.service.deletePersonnage(params.id);
  }
}
