import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.TodoCreateInput) {
    try {
      const record = await this.prisma.todo.create({ data });
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
      return await this.prisma.todo.findMany();
    } catch (error) {
      return error;
    }
  }

  async findOne(where: Prisma.TodoWhereUniqueInput) {
    try {
      const record = await this.prisma.todo.findUnique({ where });
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
    where: Prisma.TodoWhereUniqueInput,
    data: Prisma.TodoUpdateInput,
  ) {
    try {
      const record = await this.prisma.todo.update({ data, where });
      if (record) {
        return record;
      } else {
        return 'not found';
      }
    } catch (error) {
      return error;
    }
  }

  async remove(where: Prisma.TodoWhereUniqueInput) {
    try {
      const record = await this.prisma.todo.delete({ where });
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
