import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TodosService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.TodoCreateInput) {
    return await this.prisma.todo.create({ data });
  }

  async findAll() {
    return await this.prisma.todo.findMany();
  }

  async findOne(where: Prisma.TodoWhereUniqueInput) {
    return await this.prisma.todo.findUnique({ where });
  }

  async update(
    where: Prisma.TodoWhereUniqueInput,
    data: Prisma.TodoUpdateInput,
  ) {
    return await this.prisma.todo.update({ data, where });
  }

  async remove(where: Prisma.TodoWhereUniqueInput) {
    return await this.prisma.todo.delete({ where });
  }
}
