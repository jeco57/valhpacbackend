import { Module } from '@nestjs/common';
import { EmpcatentproduccionService } from './empcatentproduccion.service';
import { EmpcatentproduccionController } from './empcatentproduccion.controller';
import { Empcatentproduccion } from './entities/empcatentproduccion.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [EmpcatentproduccionController],
  providers: [EmpcatentproduccionService],
    imports: [
        TypeOrmModule.forFeature([ Empcatentproduccion ])
      ]
})
export class EmpcatentproduccionModule {}
