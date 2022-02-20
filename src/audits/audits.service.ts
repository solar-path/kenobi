import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AuditsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.AuditCreateInput) {
    try {
      const record = await this.prisma.audit.create({ data });
      if (record) {
        return record;
      } else {
        return 'not found';
      }
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    try {
      return await this.prisma.audit.findMany({
        select: {
          id: true,
          reportTitle: true,
          reportID: true,
          slug: true,
          observation: true,
          recommendation: true,
          dateIdentified: true,
          companyIdentifiedIn: {
            select: {
              code: true,
            },
          },
          LegalEntityID: true,
          deadlineToResolve: true,
          EDMS: true,
          url: true,
          responsible: true,
          status: true,
        },
      });
    } catch (error) {
      return error;
    }
  }

  async findOne(where: Prisma.AuditWhereUniqueInput) {
    try {
      const record = await this.prisma.audit.findUnique({ where });
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
    where: Prisma.AuditWhereUniqueInput,
    data: Prisma.AuditUpdateInput,
  ) {
    try {
      const record = await this.prisma.audit.update({ data, where });
      if (record) {
        return record;
      } else {
        return 'not found';
      }
    } catch (error) {
      return error;
    }
  }

  async remove(where: Prisma.AuditWhereUniqueInput) {
    try {
      const record = await this.prisma.audit.delete({ where });
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
