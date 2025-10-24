import { Module } from '@nestjs/common';
import { EmpcattamanosService } from './empcattamanos.service';
import { EmpcattamanosController } from './empcattamanos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empcattamano } from './entities/empcattamano.entity';

@Module({
  controllers: [EmpcattamanosController],
  providers: [EmpcattamanosService],
  imports: [
          TypeOrmModule.forFeature([ Empcattamano ])
        ],
})
export class EmpcattamanosModule {}
