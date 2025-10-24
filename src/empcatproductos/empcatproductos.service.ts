import { Injectable } from '@nestjs/common';
import { CreateEmpcatproductoDto } from './dto/create-empcatproducto.dto';
import { UpdateEmpcatproductoDto } from './dto/update-empcatproducto.dto';

@Injectable()
export class EmpcatproductosService {
  create(createEmpcatproductoDto: CreateEmpcatproductoDto) {
    return 'This action adds a new empcatproducto';
  }

  findAll() {
    return `This action returns all empcatproductos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} empcatproducto`;
  }

  update(id: number, updateEmpcatproductoDto: UpdateEmpcatproductoDto) {
    return `This action updates a #${id} empcatproducto`;
  }

  remove(id: number) {
    return `This action removes a #${id} empcatproducto`;
  }
}
