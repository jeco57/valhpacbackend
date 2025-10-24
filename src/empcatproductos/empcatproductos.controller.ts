import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmpcatproductosService } from './empcatproductos.service';
import { CreateEmpcatproductoDto } from './dto/create-empcatproducto.dto';
import { UpdateEmpcatproductoDto } from './dto/update-empcatproducto.dto';

@Controller('empcatproductos')
export class EmpcatproductosController {
  constructor(private readonly empcatproductosService: EmpcatproductosService) {}

  @Post()
  create(@Body() createEmpcatproductoDto: CreateEmpcatproductoDto) {
    return this.empcatproductosService.create(createEmpcatproductoDto);
  }

  @Get()
  findAll() {
    return this.empcatproductosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empcatproductosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmpcatproductoDto: UpdateEmpcatproductoDto) {
    return this.empcatproductosService.update(+id, updateEmpcatproductoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empcatproductosService.remove(+id);
  }
}
