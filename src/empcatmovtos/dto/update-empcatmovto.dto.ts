import { PartialType } from '@nestjs/swagger';
import { CreateEmpcatmovtoDto } from './create-empcatmovto.dto';

export class UpdateEmpcatmovtoDto extends PartialType(CreateEmpcatmovtoDto) {}
