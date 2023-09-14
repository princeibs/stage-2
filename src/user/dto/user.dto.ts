import { IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreateUserDto {
  @IsString({ message: "Name should be a string" })
  @IsNotEmpty()
  readonly name: string;
}

export class GetUserDto {
  @IsMongoId()
  @IsNotEmpty()
  readonly user_id: string
}

export class UpdateUserDto {
  @IsString({ message: "Name should be a string" })
  @IsNotEmpty()
  readonly name: string
}

export class UpdateOrDeleteUserParamDto {
  @IsMongoId()
  @IsNotEmpty()
  readonly user_id: string
}
