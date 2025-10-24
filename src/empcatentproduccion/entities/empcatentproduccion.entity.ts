import { Empcattipo } from "src/empcattipos/entities/empcattipo.entity";
import { Empmovto } from "src/empmovtos/entities/empmovto.entity";
import { Column, Entity,  PrimaryGeneratedColumn } from "typeorm";

@Entity('empcatentproduccion')
export class Empcatentproduccion {
    
        @PrimaryGeneratedColumn('identity')
        identproduccion: number ;
    
        @Column({type: 'varchar'
            ,length: 30 
            ,unique: true,
        })
        nomentproduccion: string;

    }

