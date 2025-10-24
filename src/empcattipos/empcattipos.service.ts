import { Injectable } from '@nestjs/common';
import { CreateEmpcattipoDto } from './dto/create-empcattipo.dto';
import { UpdateEmpcattipoDto } from './dto/update-empcattipo.dto';

@Injectable()
export class EmpcattiposService {
  create(createEmpcattipoDto: CreateEmpcattipoDto) {
    return 'This action adds a new empcattipo';
  }

  findAll() {
    return `This action returns all empcattipos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} empcattipo`;
  }

  update(id: number, updateEmpcattipoDto: UpdateEmpcattipoDto) {
    return `This action updates a #${id} empcattipo`;
  }

  remove(id: number) {
    return `This action removes a #${id} empcattipo`;
  }
}
