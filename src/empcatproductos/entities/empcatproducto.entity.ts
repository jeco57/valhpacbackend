import { Empcatentproduccion } from "src/empcatentproduccion/entities/empcatentproduccion.entity";
import { Empcattipo } from "src/empcattipos/entities/empcattipo.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";

@Entity({ name: 'empcatproductos' })
export class Empcatproducto {

    @PrimaryColumn()
    @OneToOne(
            () => Empcatentproduccion,
            ( empcatentproduccion ) => empcatentproduccion.identproduccion
        )
    @JoinColumn({ name: "identproduccion" 
                    ,referencedColumnName: "identproduccion"
                }
        )
    identproduccion: Empcatentproduccion ;


    @PrimaryColumn()
    @OneToOne(
        () => Empcattipo,
        ( empcattipo ) => empcattipo.idtipo
    )
    @JoinColumn([
                    { name: "identproduccion" 
                        ,referencedColumnName: "identproduccion"
                    }
                    ,{ name: "idtipo" 
                        ,referencedColumnName: "idtipo"
                    }
                ])
    idtipo: Empcattipo ;

    @PrimaryColumn('int')
    idproducto: number ;

    @Column({ type: 'varchar'
        , length: 100 
        ,unique: true
    })
    nomproducto: string;

    @Column('bool')
    requierecolor: boolean;

}
