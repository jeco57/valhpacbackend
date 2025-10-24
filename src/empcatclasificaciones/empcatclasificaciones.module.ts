import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EmpcatclasificacionesService } from './empcatclasificaciones.service';
import { EmpcatclasificacionesController } from './empcatclasificaciones.controller';

import { Empcatclasificacion } from './entities/empcatclasificacion.entity';

@Module({
  controllers: [EmpcatclasificacionesController],
  providers: [EmpcatclasificacionesService],
  imports: [
          TypeOrmModule.forFeature([ Empcatclasificacion ])
        ],
})
export class EmpcatclasificacionesModule {}
