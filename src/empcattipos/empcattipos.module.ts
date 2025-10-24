import { Module } from '@nestjs/common';
import { EmpcattiposService } from './empcattipos.service';
import { EmpcattiposController } from './empcattipos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Empcattipo } from './entities/empcattipo.entity';

@Module({
  controllers: [EmpcattiposController],
  providers: [EmpcattiposService],
  imports: [
          TypeOrmModule.forFeature([ Empcattipo ])
        ],
})
export class EmpcattiposModule {}
