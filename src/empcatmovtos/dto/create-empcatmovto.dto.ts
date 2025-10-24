import { IsInt, IsPositive, IsString, MinLength } from "class-validator";

export class CreateEmpcatmovtoDto {

    @IsInt()
    @IsPositive()
    identproduccion: number ;
    
    @IsInt()
    @IsPositive()
    idmovto: number ;
        
    @IsString()
    @MinLength(1)
    nommovto: string;
    
}