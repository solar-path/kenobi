import { Module } from '@nestjs/common';

import { PrismaService } from './prisma.service';
import { TodosModule } from './todos/todos.module';
import { UsersModule } from './users/users.module';
import { AuditsModule } from './audits/audits.module';
import { CompaniesModule } from './companies/companies.module';
import { FindingsModule } from './findings/findings.module';

@Module({
  imports: [
    TodosModule,
    UsersModule,
    AuditsModule,
    CompaniesModule,
    FindingsModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
