import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import {
  CreateUserDto,
  GetUserDto,
  UpdateUserDto,
  UpdateOrDeleteUserParamDto,
} from './dto/user.dto';
import ResInterface from './interfaces/res.interface';
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  create(@Body() createUserDto: CreateUserDto): Promise<ResInterface> {
    return this.userService.createUser(createUserDto);
  }

  @Get(':user_id')
  @UsePipes(new ValidationPipe({ transform: true }))
  find(@Param() getUserDto: GetUserDto): Promise<ResInterface> {
    return this.userService.findUser(getUserDto.user_id);
  }

  @Put(':user_id')
  @UsePipes(new ValidationPipe({ transform: true }))
  update(
    @Body() updateUserDto: UpdateUserDto,
    @Param() updateUserParamDto: UpdateOrDeleteUserParamDto,
  ): Promise<ResInterface> {
    return this.userService.updateUser(
      updateUserParamDto.user_id,
      updateUserDto,
    );
  }

  @Delete(':user_id')
  @UsePipes(new ValidationPipe({ transform: true }))
  delete(
    @Param() deleteUserDto: UpdateOrDeleteUserParamDto,
  ): Promise<ResInterface> {
    return this.userService.deleteUser(deleteUserDto.user_id);
  }
}
