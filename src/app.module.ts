import { Module } from '@nestjs/common';

import { PrismaService } from './prisma.service';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [TodosModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
