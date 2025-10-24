import { Injectable } from '@nestjs/common';
import { CreateEmpcatentproduccionDto } from './dto/create-empcatentproduccion.dto';
import { UpdateEmpcatentproduccionDto } from './dto/update-empcatentproduccion.dto';

@Injectable()
export class EmpcatentproduccionService {
  create(createEmpcatentproduccionDto: CreateEmpcatentproduccionDto) {
    return 'This action adds a new empcatentproduccion';
  }

  findAll() {
    return `This action returns all empcatentproduccion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} empcatentproduccion`;
  }

  update(id: number, updateEmpcatentproduccionDto: UpdateEmpcatentproduccionDto) {
    return `This action updates a #${id} empcatentproduccion`;
  }

  remove(id: number) {
    return `This action removes a #${id} empcatentproduccion`;
  }
}
