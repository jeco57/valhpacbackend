import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmpcattamanosService } from './empcattamanos.service';
import { CreateEmpcattamanoDto } from './dto/create-empcattamano.dto';
import { UpdateEmpcattamanoDto } from './dto/update-empcattamano.dto';

@Controller('empcattamanos')
export class EmpcattamanosController {
  constructor(private readonly empcattamanosService: EmpcattamanosService) {}

  @Post()
  create(@Body() createEmpcattamanoDto: CreateEmpcattamanoDto) {
    return this.empcattamanosService.create(createEmpcattamanoDto);
  }

  @Get()
  findAll() {
    return this.empcattamanosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empcattamanosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmpcattamanoDto: UpdateEmpcattamanoDto) {
    return this.empcattamanosService.update(+id, updateEmpcattamanoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empcattamanosService.remove(+id);
  }
}
