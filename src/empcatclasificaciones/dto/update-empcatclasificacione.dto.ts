import { PartialType } from '@nestjs/swagger';
import { CreateEmpcatclasificacioneDto } from './create-empcatclasificacione.dto';

export class UpdateEmpcatclasificacioneDto extends PartialType(CreateEmpcatclasificacioneDto) {}
