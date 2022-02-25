import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Prisma } from '@prisma/client';
import { AuditsService } from './audits.service';

@Controller('audits')
@UseGuards(AuthGuard())
export class AuditsController {
  constructor(private readonly auditsService: AuditsService) {}

  @Post()
  create(@Body() createAuditDto: Prisma.AuditCreateInput) {
    return this.auditsService.create(createAuditDto);
  }

  @Get()
  findAll() {
    return this.auditsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.auditsService.findOne({ id: +id });
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAuditDto: Prisma.AuditUpdateInput,
  ) {
    return this.auditsService.update({ id: +id }, updateAuditDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.auditsService.remove({ id: +id });
  }
}
