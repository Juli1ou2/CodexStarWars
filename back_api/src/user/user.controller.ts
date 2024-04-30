import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { UsersService } from './user.service';
import { User } from './user.entity/user.entity';

@Controller('users')
export class UsersController {
    constructor(private service: UsersService) { }

    @Get()
    getAll() {
        return this.service.getUsers();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getUser(params.id);

    }
    @Get('username/:username')
    getByEmail(@Param() params) {
        return this.service.getUserByEmail(params.username);
    }

    @Post()
    create(@Body() User: User) {
        return this.service.createUser(User);
    }

    @Put()
    update(@Body() User: User) {
        return this.service.updateUser(User);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteUser(params.id);
    }
}