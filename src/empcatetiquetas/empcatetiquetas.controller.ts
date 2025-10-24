import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmpcatetiquetasService } from './empcatetiquetas.service';
import { CreateEmpcatetiquetaDto } from './dto/create-empcatetiqueta.dto';
import { UpdateEmpcatetiquetaDto } from './dto/update-empcatetiqueta.dto';

@Controller('empcatetiquetas')
export class EmpcatetiquetasController {
  constructor(private readonly empcatetiquetasService: EmpcatetiquetasService) {}

  @Post()
  create(@Body() createEmpcatetiquetaDto: CreateEmpcatetiquetaDto) {
    return this.empcatetiquetasService.create(createEmpcatetiquetaDto);
  }

  @Get()
  findAll() {
    return this.empcatetiquetasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empcatetiquetasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmpcatetiquetaDto: UpdateEmpcatetiquetaDto) {
    return this.empcatetiquetasService.update(+id, updateEmpcatetiquetaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empcatetiquetasService.remove(+id);
  }
}
