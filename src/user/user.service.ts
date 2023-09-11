import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import ResInterface from './interfaces/res.interface';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async createUser(createUserDto: CreateUserDto): Promise<ResInterface> {
    try {
      const user = new this.userModel({
        firstName: createUserDto.firstName,
        lastName: createUserDto.lastName,
        otherNames: createUserDto.otherNames,
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      await user.save();

      return {
        statusCode: HttpStatus.CREATED,
        message: 'User created successfully',
        data: user,
      };
    } catch (e) {
      return {
        statusCode: HttpStatus.BAD_REQUEST,
        error: e.message,
      };
    }
  }

  async findUser(userId: string): Promise<ResInterface> {
    const user = await this.userModel.findById(userId);

    if (user) {
      return {
        statusCode: HttpStatus.OK,
        data: user,
      };
    } else {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        message: `User with id ${userId} not found`,
      };
    }
  }

  async updateUser(
    userId: string,
    updateUserDto: UpdateUserDto,
  ): Promise<ResInterface> {
    const user = await this.userModel.findById(userId);

    if (user) {
      user.firstName = updateUserDto.firstName || user.firstName;
      user.lastName = updateUserDto.lastName || user.lastName;
      user.otherNames = updateUserDto.otherNames || user.otherNames;
      user.updatedAt = new Date();

      user.save();

      return {
        statusCode: HttpStatus.OK,
        message: `User with id ${userId} updated successfully`,
        data: {
          user,
        },
      };
    } else {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        message: `User with id ${userId} not found`,
      };
    }
  }

  async deleteUser(userId: string): Promise<ResInterface> {
    const user = await this.userModel.findById(userId);

    if (user) {
      const deletedUser = await this.userModel.findByIdAndDelete(userId);
      return {
        statusCode: HttpStatus.OK,
        message: `User with id ${deletedUser._id} deleted successfully`,
      };
    } else {
      return {
        statusCode: HttpStatus.NOT_FOUND,
        message: `User with id ${userId} not found`,
      };
    }
  }
}
