import { Empcatentproduccion } from "src/empcatentproduccion/entities/empcatentproduccion.entity";

import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";


@Entity({ name: 'empcattipos' })
export class Empcattipo {

    @PrimaryColumn()
    @OneToOne(
        () => Empcatentproduccion,
        ( empcatentproduccion ) => empcatentproduccion.identproduccion,
        { eager: true }
    )
    @JoinColumn({ name: "identproduccion" })
    identproduccion: Empcatentproduccion ;


    @PrimaryColumn('int')
    idtipo: number ;

    @Column({ type: 'varchar'
        , length: 100 
        ,unique: true,
    })
    nomtipo: string;


}
