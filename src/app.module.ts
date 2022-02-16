import { Module } from '@nestjs/common';

import { PrismaService } from './prisma.service';
import { TodosModule } from './todos/todos.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TodosModule, UsersModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
