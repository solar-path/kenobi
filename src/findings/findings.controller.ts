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
import { FindingsService } from './findings.service';

@Controller('findings')
@UseGuards(AuthGuard())
export class FindingsController {
  constructor(private readonly findingsService: FindingsService) {}

  // @Post()
  // create(@Body() createFindingDto: CreateFindingDto) {
  //   return this.findingsService.create(createFindingDto);
  // }

  @Get()
  findAll() {
    return this.findingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.findingsService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateFindingDto: UpdateFindingDto) {
  //   return this.findingsService.update(+id, updateFindingDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.findingsService.remove(+id);
  }
}
