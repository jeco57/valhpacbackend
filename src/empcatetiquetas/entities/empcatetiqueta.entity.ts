import { Empcatentproduccion } from "src/empcatentproduccion/entities/empcatentproduccion.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";



@Entity({ name: 'empcatetiquetas' })
export class Empcatetiqueta {

    @PrimaryColumn()
    @OneToOne(
        () => Empcatentproduccion,
        ( empcatentproduccion ) => empcatentproduccion.identproduccion,
        { eager: true }
    )
    @JoinColumn({ name: "identproduccion" })
    identproduccion: Empcatentproduccion ;


    @PrimaryColumn('int')
    idetiqueta: number ;

    @Column({ type: 'varchar'
        , length: 100 
        ,unique: true,
    })
    nometiqueta: string;

}
