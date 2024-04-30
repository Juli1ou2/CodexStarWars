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
  import { Espece } from './espece.entity/espece.entity';
  import { EspecesService } from './especes.service';
  
  @Controller('especes')
  export class EspecesController {
    constructor(private service: EspecesService) {}
  
    @Get()
    getAll() {
      return this.service.getEspeces();
    }
  
    @Get('nom/:nom')
    getAllByName(@Param() params) {
      return this.service.getEspecesByName(params.nom);
    }
  
    @Get(':id')
    get(@Param() params) {
      return this.service.getEspece(params.id);
    }
  
    @Post()
    create(@Body() espece: Espece) {
      return this.service.createEspece(espece);
    }
  
    @Put(':id/personnages')
    async createEspecePersonnagesRelation(
      @Param('id') id: string,
      @Body() body: { personnages: number[] },
    ) {
      const vehiculeId = +id;
      const personnagesIds = body.personnages;
      try {
        const updatedEspece =
          await this.service.createEspecePersonnagesRelation(
            vehiculeId,
            personnagesIds,
          );
        return {
          message:
            'SUCCESS : Relations entre l\'espèce et le personnage effectuées !',
          data: updatedEspece,
        };
      } catch (error) {
        if (error.status === HttpStatus.NOT_FOUND) {
          throw new HttpException('Espece not found', HttpStatus.NOT_FOUND);
        }
        throw new HttpException(
          'ERREUR lors de la relation entre l\'espèce et les personnages !',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  
    @Put()
    update(@Body() espece: Espece) {
      return this.service.updateEspece(espece);
    }
  
    @Delete(':id')
    deleteUser(@Param() params) {
      return this.service.deleteEspece(params.id);
    }
  }
  