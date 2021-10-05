import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
	export class UsersService {
		public users = []

	create(createUserDto: CreateUserDto) {
		// this.users.push(user)
		return 'User account successfuly created';
	}

	//Get data all users
	findAll() {
		return `Successfuly get all user`;
	}

	//Find selected user with id  ||  find user by id
	findOne(id: number) {
		return `Data User #${ id } successfuly founded`;
	}

	//Update data selected user by user id
	update(id: number, updateUserDto: UpdateUserDto) {
		return `Data User #${id} successfuly updated`;
	}

	//Delete data user by id
	remove(id: number) {
			return `Data User #${id} successfuly deleted`;
		}
	}
