import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.UserCreateInput) {
    try {
      const record = await this.prisma.user.create({ data });
      if (record) {
        return record;
      } else {
        return 'not found';
      }
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          return 'There is a unique constraint violation';
        }
      }
    }
  }

  async findAll() {
    try {
      return await this.prisma.user.findMany();
    } catch (error) {
      return error;
    }
  }

  async findOne(where: Prisma.UserWhereUniqueInput) {
    try {
      const record = await this.prisma.user.findUnique({ where });
      if (record) {
        return record;
      } else {
        return 'not found';
      }
    } catch (error) {
      return error;
    }
  }

  async update(
    where: Prisma.UserWhereUniqueInput,
    data: Prisma.UserUpdateInput,
  ) {
    try {
      const record = await this.prisma.user.update({ data, where });
      if (record) {
        return record;
      } else {
        return 'not found';
      }
    } catch (error) {
      return error;
    }
  }

  async remove(where: Prisma.UserWhereUniqueInput) {
    try {
      const record = await this.prisma.user.delete({ where });
      if (record) {
        return record;
      } else {
        return 'not found';
      }
    } catch (error) {
      return error;
    }
  }
}
