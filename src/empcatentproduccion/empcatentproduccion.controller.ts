import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { EmpcatentproduccionService } from './empcatentproduccion.service';
import { CreateEmpcatentproduccionDto } from './dto/create-empcatentproduccion.dto';
//import { UpdateEmpcatentproduccionDto } from './dto/update-empcatentproduccion.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Empcatentproduccion } from './entities/empcatentproduccion.entity';
import { PaginationDto } from 'src/common/dtos/pagination.dto';

@ApiTags('empcatentproduccion')
@Controller('empcatentproduccion')
export class EmpcatentproduccionController {
  constructor(private readonly empcatentproduccionService: EmpcatentproduccionService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Product was created',
    type: Empcatentproduccion,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 403, description: 'Forbidden. Token related.' })
  create(@Body() createEmpcatentproduccionDto: CreateEmpcatentproduccionDto) {
    return this.empcatentproduccionService.create(createEmpcatentproduccionDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmpcatentproduccionDto: CreateEmpcatentproduccionDto) {
    return this.empcatentproduccionService.update(+id, updateEmpcatentproduccionDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id ,'get')
    return this.empcatentproduccionService.findOne(+id);
  }
 

  @Get()
  findAll(@Query() paginationDto: PaginationDto) {
    return this.empcatentproduccionService.findAll(paginationDto);
  }

  

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empcatentproduccionService.remove(+id);
  }
}
