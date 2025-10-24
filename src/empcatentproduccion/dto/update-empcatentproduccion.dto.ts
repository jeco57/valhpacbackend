import { PartialType } from '@nestjs/swagger';
import { CreateEmpcatentproduccionDto } from './create-empcatentproduccion.dto';

export class UpdateEmpcatentproduccionDto extends PartialType(CreateEmpcatentproduccionDto) {}
