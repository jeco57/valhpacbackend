import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmpmovtosService } from './empmovtos.service';
import { CreateEmpmovtoDto } from './dto/create-empmovto.dto';
import { UpdateEmpmovtoDto } from './dto/update-empmovto.dto';
import { Empmovto } from './entities/empmovto.entity';

@Controller('empmovtos')
export class EmpmovtosController {
  constructor(private readonly empmovtosService: EmpmovtosService) {}

  @Post()
  create(@Body() createEmpmovtoDto: [Empmovto]) {
    // console.log({createEmpmovtoDto});
    return this.empmovtosService.create(createEmpmovtoDto);
  }

  @Get()
  async findAll() {
    return await this.empmovtosService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.empmovtosService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateEmpmovtoDto: UpdateEmpmovtoDto) {
  //   return this.empmovtosService.update(+id, updateEmpmovtoDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.empmovtosService.remove(+id);
  // }
}
