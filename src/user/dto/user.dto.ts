import { IsMongoId, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ObjectId } from 'mongoose';

export class CreateUserDto {
  @IsString({ message: "First name should be a string" })
  @IsNotEmpty()
  readonly firstName: string;

  @IsString({ message: "Last name should be a string" })
  @IsNotEmpty()
  readonly lastName: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  readonly otherNames: string;
}

export class GetUserDto {
  @IsMongoId()
  @IsNotEmpty()
  readonly user_id: string
}

export class UpdateUserDto {
  @IsString({ message: "First name should be a string" })
  @IsNotEmpty()
  readonly firstName: string;

  @IsString({ message: "Last name should be a string" })
  @IsNotEmpty()
  readonly lastName: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  readonly otherNames: string;
}

export class UpdateOrDeleteUserParamDto {
  @IsMongoId()
  @IsNotEmpty()
  readonly user_id: string
}