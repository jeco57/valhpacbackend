import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";

import { Empcatentproduccion } from "src/empcatentproduccion/entities/empcatentproduccion.entity";
import { Empcattipo } from "src/empcattipos/entities/empcattipo.entity";
import { Empcatproducto } from "src/empcatproductos/entities/empcatproducto.entity";


@Entity({ name: 'empcatclasificaciones' })
export class Empcatclasificacion {

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

    @PrimaryColumn()
    @OneToOne(
        () => Empcatproducto,
        ( empcatproducto ) => empcatproducto.idproducto
    )
    @JoinColumn([
                    { name: "identproduccion" 
                        ,referencedColumnName: "identproduccion"
                    }
                    ,{ name: "idtipo" 
                        ,referencedColumnName: "idtipo"
                    }
                    ,{ name: "idproducto" 
                        ,referencedColumnName: "idproducto"
                    }
                ])
    idproducto: Empcatproducto ;

    @PrimaryColumn('int')
    idclasificacion: number ;

    @Column({ type: 'varchar'
        , length: 100 
    })
    nomclasificacion: string;

    
}
