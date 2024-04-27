import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Vehicule } from './vehicule.entity/vehicule.entity';
import { VehiculesService } from './vehicules.service';

@Controller('vehicules')
export class VehiculesController {
  constructor(private service: VehiculesService) {}

  @Get()
  getAll() {
    return this.service.getVehicules();
  }

  @Get('nom')
  getAllByName(@Body() body: { nom: string }) {
    return this.service.getVehiculesByName(body.nom);
  }

  @Get(':id')
  get(@Param() params) {
    return this.service.getVehicule(params.id);
  }

  @Post()
  create(@Body() vehicule: Vehicule) {
    return this.service.createVehicule(vehicule);
  }

  @Put(':id/organisations')
  async createVehiculeOrganisationsRelation(
    @Param('id') id: string,
    @Body() body: { organisations: number[] },
  ) {
    const vehiculeId = +id;
    const organisationsIds = body.organisations;
    try {
      const updatedVehicule =
        await this.service.createVehiculeOrganisationsRelation(
          vehiculeId,
          organisationsIds,
        );
      return {
        message:
          'SUCCESS : Relations entre le véhicule et les organisations effectuées !',
        data: updatedVehicule,
      };
    } catch (error) {
      if (error.status === HttpStatus.NOT_FOUND) {
        throw new HttpException('Vehicule not found', HttpStatus.NOT_FOUND);
      }
      throw new HttpException(
        'ERREUR lors de la relation entre le véhicule et les organisations !',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Put()
  update(@Body() vehicule: Vehicule) {
    return this.service.updateVehicule(vehicule);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    return this.service.deleteVehicule(params.id);
  }
}
