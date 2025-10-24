import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { EmpcatmovtosService } from './empcatmovtos.service';
import { CreateEmpcatmovtoDto } from './dto/create-empcatmovto.dto';
import { UpdateEmpcatmovtoDto } from './dto/update-empcatmovto.dto';
import { Auth } from 'src/auth/decorators';
import { ValidRoles } from 'src/auth/interfaces';

@Controller('empcatmovtos')
export class EmpcatmovtosController {
  constructor(private readonly empcatmovtosService: EmpcatmovtosService) {}

  @Post()
  @Auth(ValidRoles.admin)
  create(@Body() createEmpcatmovtoDto: CreateEmpcatmovtoDto) {
    return this.empcatmovtosService.create(createEmpcatmovtoDto);
  }

  @Get()
  findAll() {
    return this.empcatmovtosService.findAll();
  }

  @Get('findone')
  findOne(@Query('ident') ident: string ,@Query('id') id: string) {
    // console.log(ident);
    // console.log(id);
    return this.empcatmovtosService.findOne(+ident ,+id);
  }
  
  

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmpcatmovtoDto: UpdateEmpcatmovtoDto) {
    return this.empcatmovtosService.update(+id, updateEmpcatmovtoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.empcatmovtosService.remove(+id);
  }
}
