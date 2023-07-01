import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from '../auth/decorator';
import { JWTGuard } from '../auth/guard';
import { UserService } from './user.service';
import { UserDto } from './dto';
@UseGuards(JWTGuard)
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('/me')
  getMe(@GetUser() user: number) {
    return user;
  }
  @Patch('/me')
  editUser(@GetUser() user: any, @Body() dto: UserDto) {
    return this.userService.updateUser(user, dto);
  }
  @Delete('/:id')
  deleteUser(@Param() params: string) {
    return this.userService.deleteUser(params);
  }
}
