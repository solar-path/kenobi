import { Module } from '@nestjs/common';

import { PrismaService } from './prisma.service';
import { TodosModule } from './todos/todos.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AuditsModule } from './audits/audits.module';
import { CompaniesModule } from './companies/companies.module';

@Module({
  imports: [TodosModule, UsersModule, AuthModule, AuditsModule, CompaniesModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
