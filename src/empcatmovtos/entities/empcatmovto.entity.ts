import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";

import { Empcatentproduccion } from "src/empcatentproduccion/entities/empcatentproduccion.entity";


@Entity({ name: 'empcatmovtos' })
export class Empcatmovto {


    @PrimaryColumn()
    @OneToOne(
        () => Empcatentproduccion,
        ( empcatentproduccion ) => empcatentproduccion.identproduccion,
        { eager: true }
    )
    @JoinColumn({ name: "identproduccion" })
    identproduccion: number ;


    @PrimaryColumn('int')
    idmovto: number ;

    @Column({ type: 'varchar'
        , length: 50 
        ,unique: true,
    })
    nommovto: string;

}
