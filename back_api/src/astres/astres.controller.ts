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
  import { Astre } from './astre.entity/astre.entity';
  import { AstresService } from './astres.service';
  
  @Controller('astres')
  export class AstresController {
    constructor(private service: AstresService) {}
  
    @Get()
    getAll(@Param() params) {
      return this.service.getAstres();
    }
  
    @Get(':id')
    get(@Param() params) {
      return this.service.getAstre(params.id);
    }
  
    @Post()
    create(@Body() astre: Astre) {
      return this.service.createAstre(astre);
    }
  
    @Put(':id/organisations')
    async createAstreOrganisationsRelation(
      @Param('id') id: string,
      @Body() body: { organisations: number[] },
    ) {
      const astreId = +id;
      const organisationsIds = body.organisations;
      try {
        const updateAstre =
          await this.service.createAstreOrganisationsRelation(
            astreId,
            organisationsIds,
          );
        return {
          message:
            'SUCCESS : Relations entre l\'Astre et les organisations effectuées !',
          data: updateAstre,
        };
      } catch (error) {
        if (error.status === HttpStatus.NOT_FOUND) {
          throw new HttpException('Astre not found', HttpStatus.NOT_FOUND);
        }
        throw new HttpException(
          'ERREUR lors de la relation entre l\'Astre et les organisations !',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
    }
  
    @Put()
    update(@Body() astre: Astre) {
      return this.service.updateAstre(astre);
    }
  
    @Delete(':id')
    deleteUser(@Param() params) {
      return this.service.deleteAstre(params.id);
    }
  }
  