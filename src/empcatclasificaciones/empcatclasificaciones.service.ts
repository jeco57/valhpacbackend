import { Injectable } from '@nestjs/common';
import { CreateEmpcatclasificacioneDto } from './dto/create-empcatclasificacione.dto';
import { UpdateEmpcatclasificacioneDto } from './dto/update-empcatclasificacione.dto';

@Injectable()
export class EmpcatclasificacionesService {
  create(createEmpcatclasificacioneDto: CreateEmpcatclasificacioneDto) {
    return 'This action adds a new empcatclasificacione';
  }

  findAll() {
    return `This action returns all empcatclasificaciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} empcatclasificacione`;
  }

  update(id: number, updateEmpcatclasificacioneDto: UpdateEmpcatclasificacioneDto) {
    return `This action updates a #${id} empcatclasificacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} empcatclasificacione`;
  }
}
