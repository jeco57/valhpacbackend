import { ApiProperty } from "@nestjs/swagger";

import { IsString, MinLength } from "class-validator";

export class CreateEmpcatentproduccionDto {

    @ApiProperty({
        description: '',
        nullable: false,
        minLength: 1
    })
    @IsString()
    @MinLength(1)
    nomentproduccion?: string;

}
