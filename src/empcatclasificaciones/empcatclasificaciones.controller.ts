import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmpcatclasificacionesService } from './empcatclasificaciones.service';
import { CreateEmpcatclasificacioneDto } from './dto/create-empcatclasificacione.dto';
import { UpdateEmpcatclasificacioneDto } from './dto/update-empcatclasificacione.dto';

@Controller('empcatclasificaciones')
export class EmpcatclasificacionesController {
  constructor(private readonly empcatclasificacionesService: EmpcatclasificacionesService) {}

  @Post()
  create(@Body() createEmpcatclasificacioneDto: CreateEmpcatclasificacioneDto) {
    return this.empcatclasificacionesService.create(createEmpcatclasificacioneDto);
  }

  @Get()
  findAll() {
    return this.empcatclasificacionesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empcatclasificacionesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmpcatclasificacioneDto: UpdateEmpcatclasificacioneDto) {
    return this.empcatclasificacionesService.update(+id, updateEmpcatclasificacioneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empcatclasificacionesService.remove(+id);
  }
}
