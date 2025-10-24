import { Module } from '@nestjs/common';
import { EmpmovtosService } from './empmovtos.service';
import { EmpmovtosController } from './empmovtos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Empmovto } from './entities/empmovto.entity';

@Module({
  controllers: [EmpmovtosController],
  providers: [EmpmovtosService],
  imports: [
          TypeOrmModule.forFeature([ Empmovto ])
        ],
})
export class EmpmovtosModule {}
