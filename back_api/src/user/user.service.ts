import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity/user.entity';
const bcrypt = require('bcrypt');

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private UsersRepository: Repository<User>) { }

    async getUsers(): Promise<User[]> {
        return await this.UsersRepository.find();
    }

    async getUser(_id: number): Promise<User> {
        return await this.UsersRepository.findOneBy({id:_id})
    }

    async createUser(user: User) {
        if(user.password){
            const password= user.password;
            const saltOrRounds = 10;
            const hash = await bcrypt.hash(password, saltOrRounds);
            user.password= hash;
        }
        return await this.UsersRepository.save(user)
    }

    async updateUser(user: User) {
        if(user.password){
            const password= user.password;
            const saltOrRounds = 10;
            const hash = await bcrypt.hash(password, saltOrRounds);
            user.password= hash;
        }
        return await this.UsersRepository.update(user.id, user);
    }

    async deleteUser(user: User) {
        return await this.UsersRepository.delete(user);
    }

    async findOne(username: string) {
        return await this.UsersRepository.findOneBy({email:username});
    }
}