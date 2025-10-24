import { PartialType } from '@nestjs/mapped-types';
import { CreateEmpmovtoDto } from './create-empmovto.dto';

export class UpdateEmpmovtoDto extends PartialType(CreateEmpmovtoDto) {}
