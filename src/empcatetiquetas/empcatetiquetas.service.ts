import { Injectable } from '@nestjs/common';
import { CreateEmpcatetiquetaDto } from './dto/create-empcatetiqueta.dto';
import { UpdateEmpcatetiquetaDto } from './dto/update-empcatetiqueta.dto';

@Injectable()
export class EmpcatetiquetasService {
  create(createEmpcatetiquetaDto: CreateEmpcatetiquetaDto) {
    return 'This action adds a new empcatetiqueta';
  }

  findAll() {
    return `This action returns all empcatetiquetas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} empcatetiqueta`;
  }

  update(id: number, updateEmpcatetiquetaDto: UpdateEmpcatetiquetaDto) {
    return `This action updates a #${id} empcatetiqueta`;
  }

  remove(id: number) {
    return `This action removes a #${id} empcatetiqueta`;
  }
}
