import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/register')
  @ApiCreatedResponse({ description: 'Register new users' })
  register(@Body() createUserDto: Prisma.UserCreateInput) {
    return this.usersService.register(createUserDto);
  }

  @Post('/login')
  @ApiCreatedResponse({ description: 'Login into system' })
  login(@Body() credentials: Prisma.UserCreateInput) {
    return this.usersService.login(credentials);
  }

  @Get()
  @UseGuards(AuthGuard())
  @ApiCreatedResponse({ description: 'Get the full list of users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard())
  @ApiCreatedResponse({ description: 'Get a user by ID' })
  findOne(@Param('id') id: string) {
    return this.usersService.findOneByID({ id: +id });
  }

  // @Post('/logout')
  // logout() {
  //   return this.usersService.logout();
  // }

  // @Post('/refresh')
  // refreshToken() {
  //   return this.usersService.refreshToken();
  // }

  @Patch(':id')
  @UseGuards(AuthGuard())
  @ApiCreatedResponse({ description: 'Update user data by ID' })
  update(
    @Param('id') id: string,
    @Body() updateUserDto: Prisma.UserUpdateInput,
  ) {
    return this.usersService.update({ id: +id }, updateUserDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  @ApiCreatedResponse({ description: 'Delete the user by ID' })
  remove(@Param('id') id: string) {
    return this.usersService.remove({ id: +id });
  }
}
