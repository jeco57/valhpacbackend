import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmpcatentproduccionService } from './empcatentproduccion.service';
import { CreateEmpcatentproduccionDto } from './dto/create-empcatentproduccion.dto';
import { UpdateEmpcatentproduccionDto } from './dto/update-empcatentproduccion.dto';

@Controller('empcatentproduccion')
export class EmpcatentproduccionController {
  constructor(private readonly empcatentproduccionService: EmpcatentproduccionService) {}

  @Post()
  create(@Body() createEmpcatentproduccionDto: CreateEmpcatentproduccionDto) {
    return this.empcatentproduccionService.create(createEmpcatentproduccionDto);
  }

  @Get()
  findAll() {
    return this.empcatentproduccionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empcatentproduccionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmpcatentproduccionDto: UpdateEmpcatentproduccionDto) {
    return this.empcatentproduccionService.update(+id, updateEmpcatentproduccionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empcatentproduccionService.remove(+id);
  }
}
