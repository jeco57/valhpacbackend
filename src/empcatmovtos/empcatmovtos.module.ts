import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EmpcatmovtosService } from './empcatmovtos.service';
import { EmpcatmovtosController } from './empcatmovtos.controller';
import { Empcatmovto } from './entities/empcatmovto.entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [EmpcatmovtosController],
  providers: [EmpcatmovtosService],
  imports: [
            TypeOrmModule.forFeature([ Empcatmovto ]),
            AuthModule,
          ],
})
export class EmpcatmovtosModule {}
