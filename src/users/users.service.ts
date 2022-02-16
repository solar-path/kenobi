import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.UserCreateInput) {
    return await this.prisma.user.create({ data });
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findOne(where: Prisma.UserWhereUniqueInput) {
    return await this.prisma.user.findUnique({ where });
  }

  async update(
    where: Prisma.UserWhereUniqueInput,
    data: Prisma.UserUpdateInput,
  ) {
    return await this.prisma.user.update({ data, where });
  }

  async remove(where: Prisma.UserWhereUniqueInput) {
    return await this.prisma.user.delete({ where });
  }
}
