import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { EspecesService } from './especes.service';
import { Espece } from './espece.entity/espece.entity';

@Controller('especes')
export class EspecesController {
    constructor(private service: EspecesService) { }

    @Get()
    getAll(@Param() params) {
        return this.service.getEspeces();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getEspece(params.id);
    }

    @Post()
    create(@Body() typeuser: Espece) {
        return this.service.createEspece(typeuser);
    }

    @Put()
    update(@Body() typeuser: Espece) {
        return this.service.updateEspece(typeuser);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteEspece(params.id);
    }
}
