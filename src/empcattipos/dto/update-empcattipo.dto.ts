import { PartialType } from '@nestjs/swagger';
import { CreateEmpcattipoDto } from './create-empcattipo.dto';

export class UpdateEmpcattipoDto extends PartialType(CreateEmpcattipoDto) {}
