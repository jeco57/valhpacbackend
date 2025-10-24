import { IsDate, IsInt, IsNumber, IsPositive, IsString, MinLength } from "class-validator";

export class CreateEmpmovtoDto {
    @IsInt()
    @IsPositive()
    identproduccion?: number ;

    @IsString()
    @MinLength(4)
    temporada?: string;

    @IsDate()
    fecha?: Date;

    @IsInt()
    @IsPositive()
    idmovto?: number ;

    @IsInt()
    @IsPositive()
    idtipo?: number ;

    @IsInt()
    @IsPositive()
    idproducto?: number ;

    @IsInt()
    @IsPositive()
    idtamano?: number ;

    @IsInt()
    @IsPositive()
    idclasificacion?: number ;

    @IsInt()
    @IsPositive()
    idetiqueta?: number ;
        
    @IsInt()
    @IsPositive()
    bultos?: number ;

    @IsNumber()
    kilos?: number ;
    
}
