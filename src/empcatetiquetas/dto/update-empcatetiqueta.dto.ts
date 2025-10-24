import { PartialType } from '@nestjs/swagger';
import { CreateEmpcatetiquetaDto } from './create-empcatetiqueta.dto';

export class UpdateEmpcatetiquetaDto extends PartialType(CreateEmpcatetiquetaDto) {}
