import { PartialType } from '@nestjs/swagger';
import { CreateEmpcatproductoDto } from './create-empcatproducto.dto';

export class UpdateEmpcatproductoDto extends PartialType(CreateEmpcatproductoDto) {}
