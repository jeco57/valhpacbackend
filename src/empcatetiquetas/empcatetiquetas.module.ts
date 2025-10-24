import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EmpcatetiquetasService } from './empcatetiquetas.service';
import { EmpcatetiquetasController } from './empcatetiquetas.controller';
import { Empcatetiqueta } from './entities/empcatetiqueta.entity';

@Module({
  controllers: [EmpcatetiquetasController],
  providers: [EmpcatetiquetasService],
  imports: [
          TypeOrmModule.forFeature([ Empcatetiqueta ])
        ],
})
export class EmpcatetiquetasModule {}
