import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async register(data: Prisma.UserCreateInput) {
    try {
      await this.prisma.user.create({
        data: {
          email: data.email,
          password: await bcrypt.hash(data.password, await bcrypt.genSalt()),
          createdAt: data.createdAt,
          updatedAt: data.updatedAt,
        },
      });
      return `User ${data.email} has being registered`;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          return 'There is a unique constraint violation';
        }
      }
    }
  }

  async login(credentials: Prisma.UserCreateInput) {
    try {
      const { email, password } = credentials;
      // find the user by email in database
      const user = await this.prisma.user.findUnique({ where: { email } });
      // if user exists && passwords matches
      if (user && (await bcrypt.compare(password, user.password))) {
        const payload: JwtPayload = { email };
        const accessToken = await this.jwtService.sign(payload);
        return { id: user.id, email: user.email, accessToken };
      } else return null;
    } catch (error) {
      return error;
    }
  }

  // async logout() {}

  // async refreshToken() {}

  async findAll() {
    try {
      return await this.prisma.user.findMany({
        select: {
          id: true,
          email: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      return error;
    }
  }

  async findOneByID(where: Prisma.UserWhereUniqueInput) {
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
