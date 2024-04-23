import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { Vehicule } from './vehicule.entity/vehicule.entity';
import { VehiculesService } from './vehicules.service';

@Controller('vehicules')
export class VehiculesController {
    constructor(private service: VehiculesService) { }

    @Get()
    getAll(@Param() params) {
        return this.service.getVehicules();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getVehicule(params.id);
    }

    @Post()
    create(@Body() vehicule: Vehicule) {
        return this.service.createVehicule(vehicule);
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
