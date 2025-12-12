import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateEmpcatentproduccionDto } from './dto/create-empcatentproduccion.dto';
// import { UpdateEmpcatentproduccionDto } from './dto/update-empcatentproduccion.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Empcatentproduccion } from './entities/empcatentproduccion.entity';
import { Repository } from 'typeorm';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@Injectable()
export class EmpcatentproduccionService {


   constructor(
      @InjectRepository(Empcatentproduccion)
      private readonly empcatentproduccionRepository: Repository<Empcatentproduccion>  
    ){}

  async create(createEmpcatentproduccionDto: CreateEmpcatentproduccionDto) {
    // return 'This action adds a new empcatentproduccion';
    try {
    
          const entproduccion = this.empcatentproduccionRepository.create(createEmpcatentproduccionDto);
          await this.empcatentproduccionRepository.save(entproduccion);
    
          return entproduccion;
          
        } catch (error) {
          console.log(error);
          throw new InternalServerErrorException('Ayuda');
      
        }
  }

  async findAll(paginationDto: PaginationDto) {
    // return `This action returns all empcatentproduccion`;

    const { limit = 10, offset = 0} = paginationDto;

    const entidades = await this.empcatentproduccionRepository.find({
      take: limit,
      skip: offset,
      // relations: {
      //   images: true,
      // },
      order: {
        identproduccion: 'ASC',
      },
      // where: gender ? [{ gender }, { gender: 'unisex' }] : {},
    });

    //return this.empcatentproduccionRepository.find();
    
    const totalEntidades = await this.empcatentproduccionRepository.count(
    //   {
    //    where: gender ? [{ gender }, { gender: 'unisex' }] : {},
    // }
  );

    return {
      count: totalEntidades,
      pages: Math.ceil(totalEntidades / limit),
      entidades: entidades,
    };
  }

  async findOne(id: number) {
    let entidad: Empcatentproduccion;

    //return await this.empcatentproduccionRepository.findOneBy({ identproduccion : id });
    entidad = await this.empcatentproduccionRepository.findOneBy({ identproduccion : id });

    if (!entidad) throw new NotFoundException(`Product with ${id} not found`);

    return entidad;
  }

  async update(id: number, updateEmpcatentproduccionDto: CreateEmpcatentproduccionDto) {
    // return `This action updates a #${id} empcatentproduccion`;
    console.log(id);

    await this.empcatentproduccionRepository.update( 
              { identproduccion : id  },  // condición o PK
              updateEmpcatentproduccionDto // nuevos valores
            );
    

    return await this.empcatentproduccionRepository.findOneBy({ identproduccion : id });
  }

  remove(id: number) {
    return `This action removes a #${id} empcatentproduccion`;
  }
}
