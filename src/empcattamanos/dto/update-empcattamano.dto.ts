import { PartialType } from '@nestjs/swagger';
import { CreateEmpcattamanoDto } from './create-empcattamano.dto';

export class UpdateEmpcattamanoDto extends PartialType(CreateEmpcattamanoDto) {}
