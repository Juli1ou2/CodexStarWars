import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { OrganisationsService } from './organisations.service';
import { Organisation } from './organisation.entity/organisation.entity';

@Controller('organisations')
export class OrganisationsController {
    constructor(private service: OrganisationsService) { }

    @Get()
    getAll(@Param() params) {
        return this.service.getOrganisations();
    }

    @Get('nom/:nom')
    getAllByName(@Param() params) {
        return this.service.getOrganisationsByName(params.nom);
    }
    
    @Get(':id')
    get(@Param() params) {
        return this.service.getOrganisation(params.id);
    }

    @Post()
    create(@Body() typeuser: Organisation) {
        return this.service.createOrganisation(typeuser);
    }

    @Put()
    update(@Body() typeuser: Organisation) {
        return this.service.updateOrganisation(typeuser);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteOrganisation(params.id);
    }
}
