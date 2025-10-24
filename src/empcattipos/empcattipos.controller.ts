import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmpcattiposService } from './empcattipos.service';
import { CreateEmpcattipoDto } from './dto/create-empcattipo.dto';
import { UpdateEmpcattipoDto } from './dto/update-empcattipo.dto';

@Controller('empcattipos')
export class EmpcattiposController {
  constructor(private readonly empcattiposService: EmpcattiposService) {}

  @Post()
  create(@Body() createEmpcattipoDto: CreateEmpcattipoDto) {
    return this.empcattiposService.create(createEmpcattipoDto);
  }

  @Get()
  findAll() {
    return this.empcattiposService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empcattiposService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmpcattipoDto: UpdateEmpcattipoDto) {
    return this.empcattiposService.update(+id, updateEmpcattipoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empcattiposService.remove(+id);
  }
}
