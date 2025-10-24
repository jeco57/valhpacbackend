import { Injectable } from '@nestjs/common';
import { CreateEmpcattamanoDto } from './dto/create-empcattamano.dto';
import { UpdateEmpcattamanoDto } from './dto/update-empcattamano.dto';

@Injectable()
export class EmpcattamanosService {
  create(createEmpcattamanoDto: CreateEmpcattamanoDto) {
    return 'This action adds a new empcattamano';
  }

  findAll() {
    return `This action returns all empcattamanos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} empcattamano`;
  }

  update(id: number, updateEmpcattamanoDto: UpdateEmpcattamanoDto) {
    return `This action updates a #${id} empcattamano`;
  }

  remove(id: number) {
    return `This action removes a #${id} empcattamano`;
  }
}
