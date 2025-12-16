import { BadRequestException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

import { Empmovto } from './entities/empmovto.entity';

@Injectable()
export class EmpmovtosService {
  private readonly logger = new Logger('EmpMovtoService');

  constructor(
    @InjectRepository(Empmovto)
    private readonly empMovtoRepository: Repository<Empmovto>,
    
    private readonly dataSource: DataSource,
    private readonly dataStored: DataSource,
  ) {}


  async create(createEmpMovtosDto: [Empmovto]) {
    
    //console.log({ createEmpMovtosDto });

    var empMovto = this.empMovtoRepository.create({});
    
    // Create query runner
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    

    try {
      for (const createEmpmovtoDto of createEmpMovtosDto) {
      //createEmpMovtosDto.forEach(createEmpmovtoDto  => {
        console.log(createEmpmovtoDto);
        
        empMovto = this.empMovtoRepository.create(createEmpmovtoDto);

        console.log(empMovto);
        console.log("Hola empMovto");

        await queryRunner.manager.save(empMovto);
       }
            
      //console.log("Antes commit");
      const result = await queryRunner.commitTransaction();

      //console.log(result);
      await queryRunner.release();
      
      return {
        ok: true,
        mensaje: 'Se grabo correctamenta'
      };
    } catch (error) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      this.handleDBExceptions(error);
    }

  }

  
  private handleDBExceptions(error: any) {
    if (error.code === '23505') throw new BadRequestException(error.detail);

    this.logger.error(error);
    // console.log(error)
    throw new InternalServerErrorException(
      'Unexpected error, check server logs',
    );
  }



  async findAll() {
    //return `This action returns a product`;
    
    console.log('Hola findall empmovtos');
    const queryRunner = this.dataStored.createQueryRunner();
    await queryRunner.connect();
    try {
      const result = await queryRunner.query("Select * From uf_con_empmovtos('','')");
      //await queryRunner.release();
      //console.log(result);
      return {
        ok: true,
        data: result
      };
    }catch(error){
      console.log('Error empmovtos');
      console.log(error);
      return {
        ok: false,
        data: []
      };
    }finally {
      console.log('final empmovtos');
      await queryRunner.release();
    }






    // // const { limit = 10, offset = 0, gender = '' } = paginationDto;

    // // const products = await this.productRepository.find({
    // //   take: limit,
    // //   skip: offset,
    // //   relations: {
    // //     images: true,
    // //   },
    // //   order: {
    // //     id: 'ASC',
    // //   },
    // //   where: gender ? [{ gender }, { gender: 'unisex' }] : {},
    // // });

    // // const totalProducts = await this.productRepository.count({
    // //   where: gender ? [{ gender }, { gender: 'unisex' }] : {},
    // // });

    // // return {
    // //   count: totalProducts,
    // //   pages: Math.ceil(totalProducts / limit),
    // //   products: products.map((product) => ({
    // //     ...product,
    // //     images: product.images.map((img) => img.url),
    // //   })),
    // // };
  }

  
}
