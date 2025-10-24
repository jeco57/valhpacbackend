import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

import { Empcatentproduccion } from "src/empcatentproduccion/entities/empcatentproduccion.entity";
import { Empcattipo } from "src/empcattipos/entities/empcattipo.entity";
import { Empcatproducto } from "src/empcatproductos/entities/empcatproducto.entity";
import { Empcatclasificacion } from "src/empcatclasificaciones/entities/empcatclasificacion.entity";
import { Empcattamano } from "src/empcattamanos/entities/empcattamano.entity";
import { Empcatmovto } from "src/empcatmovtos/entities/empcatmovto.entity";
import { Empcatetiqueta } from "src/empcatetiquetas/entities/empcatetiqueta.entity";

@Entity({ name: 'empmovtos' })
export class Empmovto {

    @PrimaryColumn()
    // @OneToOne(
    //     () => Empcatentproduccion,
    //     ( empcatentproduccion ) => empcatentproduccion.identproduccion ,
    //     { eager: true }
    // )
    @JoinColumn({ name: "identproduccion" })
    identproduccion: number;

    @PrimaryColumn({type: 'varchar'
            ,length: 4
        })
    temporada: string;

    @PrimaryColumn('date')
    fecha: Date;

    @PrimaryColumn()
    @OneToOne(
        () => Empcatmovto,
        ( empcatmovto ) => empcatmovto.idmovto
    )
    @JoinColumn([
                    { name: "identproduccion" 
                        ,referencedColumnName: "identproduccion"
                    }
                    ,{ name: "idmovto" 
                        ,referencedColumnName: "idmovto"
                    }
                ])
    idmovto: number ;

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
    idtipo: number ;

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
    idproducto: number ;

    @PrimaryColumn()
    @OneToOne(
        () => Empcattamano,
        ( empcattamano ) => empcattamano.idtamano
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
                    ,{ name: "idtamano" 
                        ,referencedColumnName: "idtamano"
                    }
                ])
    idtamano: number ;

    @PrimaryColumn()
    @OneToOne(
        () => Empcatclasificacion,
        ( empcatclasificacion ) => empcatclasificacion.idclasificacion
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
                    ,{ name: "idclasificacion" 
                        ,referencedColumnName: "idclasificacion"
                    }
                ])
    idclasificacion: number ;

    @PrimaryColumn()
    @OneToOne(
        () => Empcatetiqueta,
        ( empcatetiqueta ) => empcatetiqueta.idetiqueta
    )
    @JoinColumn([
                    { name: "identproduccion" 
                        ,referencedColumnName: "identproduccion"
                    }
                    ,{ name: "idetiqueta" 
                        ,referencedColumnName: "idetiqueta"
                    }
                ])
    idetiqueta: number ;

    @Column('int', {
        default: 0
    })
    bultos: number;

    @Column('float', {
        default: 0
    })
    kilos: number;





    // idMovto SmallINT ,
    // idTipo Smallint ,
    // idProducto Smallint ,
    // idTamano Smallint ,
    // idClasificacion Smallint ,
    // idEtiqueta Smallint ,
    // Bultos INT ,
    // Kilos Numeric(10,2)



    //@PrimaryColumn()
    // @OneToOne(
    //     () => Empcatentproduccion,
    //     ( empcatentproduccion ) => empcatentproduccion.identproduccion ,
    //     { eager: true }
    // )
    // @JoinColumn({ name: "identproduccion" })
    // idmovto: Empcatentproduccion;
    


    

// @ApiProperty({
//         example: 'cd533345-f1f3-48c9-a62e-7dc2da50c8f8',
//         description: 'Product ID',
//         uniqueItems: true
//     })
    // // @PrimaryGeneratedColumn('uuid')
    // // id: string;

    // // // @ApiProperty({
    // // //     example: 'T-Shirt Teslo',
    // // //     description: 'Product Title',
    // // //     uniqueItems: true
    // // // })
    // // @Column('text', {
    // //     unique: true,
    // // })
    // // title: string;

    // // // @ApiProperty({
    // // //     example: 0,
    // // //     description: 'Product price',
    // // // })
    // // @Column('float',{
    // //     default: 0
    // // })
    // // price: number;

    // // @ApiProperty({
    // //     example: 'Anim reprehenderit nulla in anim mollit minim irure commodo.',
    // //     description: 'Product description',
    // //     default: null,
    // // })
    // // @Column({
    // //     type: 'text',
    // //     nullable: true
    // // })
    // // description: string;

    // // @ApiProperty({
    // //     example: 't_shirt_teslo',
    // //     description: 'Product SLUG - for SEO',
    // //     uniqueItems: true
    // // })
    // // @Column('text', {
    // //     unique: true
    // // })
    // // slug: string;

    // // @ApiProperty({
    // //     example: 10,
    // //     description: 'Product stock',
    // //     default: 0
    // // })
    // // @Column('int', {
    // //     default: 0
    // // })
    // // stock: number;

    // // @ApiProperty({
    // //     example: ['M','XL','XXL'],
    // //     description: 'Product sizes',
    // // })
    // // @Column('text',{
    // //     array: true
    // // })
    // // sizes: string[];

    // // @ApiProperty({
    // //     example: 'women',
    // //     description: 'Product gender',
    // // })
    // // @Column('text')
    // // gender: string;

    // // @ApiProperty()
    // // @Column('text', {
    // //     array: true,
    // //     default: []
    // // })
    // // tags: string[];

    // // // images
    // // @ApiProperty()
    // // @OneToMany(
    // //     () => ProductImage,
    // //     (productImage) => productImage.product,
    // //     { cascade: true, eager: true }
    // // )
    // // images?: ProductImage[];


    // // @ManyToOne(
    // //     () => User,
    // //     ( user ) => user.product,
    // //     { eager: true }
    // // )
    // // user: User


    // // @BeforeInsert()
    // // checkSlugInsert() {

    // //     if ( !this.slug ) {
    // //         this.slug = this.title;
    // //     }

    // //     this.slug = this.slug
    // //         .toLowerCase()
    // //         .replaceAll(' ','_')
    // //         .replaceAll("'",'')

    // // }

    // // @BeforeUpdate()
    // // checkSlugUpdate() {
    // //     this.slug = this.slug
    // //         .toLowerCase()
    // //         .replaceAll(' ','_')
    // //         .replaceAll("'",'')
    // // }

}