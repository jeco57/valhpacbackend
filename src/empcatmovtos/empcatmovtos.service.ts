import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'; 

import { CreateEmpcatmovtoDto } from './dto/create-empcatmovto.dto';
import { UpdateEmpcatmovtoDto } from './dto/update-empcatmovto.dto';

import { Empcatmovto } from './entities/empcatmovto.entity';

@Injectable()
export class EmpcatmovtosService {

  constructor(
      @InjectRepository(Empcatmovto)
      private readonly empcatmovtoRepository: Repository<Empcatmovto>  
    ){}


  async create(createEmpcatmovtoDto: CreateEmpcatmovtoDto) {
    try {
    
          const movto = this.empcatmovtoRepository.create(createEmpcatmovtoDto);
          await this.empcatmovtoRepository.save(movto);
    
          return movto;
          
        } catch (error) {
          console.log(error);
          throw new InternalServerErrorException('Ayuda');
      
        }
  }

  findAll() {
    return this.empcatmovtoRepository.find();
  }

  async findOne(ident: number,id: number) {
    // return `This action returns a #${ident} - #${id} empcatmovto`;
    let empcatmovto: Empcatmovto;

    const queryBuilder = this.empcatmovtoRepository.createQueryBuilder('movto');
    empcatmovto = await queryBuilder
      .where('identProduccion =:identProduccion and idmovto =:idmovto', {
        identProduccion: ident,
        idmovto: id,
      })
      .getOne();

    return empcatmovto;
  }

  update(id: number, updateEmpcatmovtoDto: UpdateEmpcatmovtoDto) {
    return `This action updates a #${id} empcatmovto`;
  }

  remove(id: number) {
    return `This action removes a #${id} empcatmovto`;
  }
}
