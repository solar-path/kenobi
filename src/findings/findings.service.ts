import { Injectable } from '@nestjs/common';

@Injectable()
export class FindingsService {
  // create(createFindingDto: CreateFindingDto) {
  //   return 'This action adds a new finding';
  // }

  findAll() {
    return `This action returns all findings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} finding`;
  }

  // update(id: number, updateFindingDto: UpdateFindingDto) {
  //   return `This action updates a #${id} finding`;
  // }

  remove(id: number) {
    return `This action removes a #${id} finding`;
  }
}
