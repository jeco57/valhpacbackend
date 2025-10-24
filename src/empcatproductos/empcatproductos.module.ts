import { Module } from '@nestjs/common';
import { EmpcatproductosService } from './empcatproductos.service';
import { EmpcatproductosController } from './empcatproductos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empcatproducto } from './entities/empcatproducto.entity';

@Module({
  controllers: [EmpcatproductosController],
  providers: [EmpcatproductosService],
  imports: [
        TypeOrmModule.forFeature([ Empcatproducto ])
      ],
})
export class EmpcatproductosModule {}
