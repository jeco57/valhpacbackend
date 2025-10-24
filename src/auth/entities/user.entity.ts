import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar'
            , length: 100 
            ,unique: true,
        })
    email: string;

    @Column('text',{
        select: false,
    })
    password: string;

    @Column({ type: 'varchar'
            , length: 100 
        })
    fullname: string;

    @Column('bool',{
        default: true,
    })
    isActive: boolean;

    @Column({ type: 'text'
            ,array: true
            ,default: ['user']
        })
    roles: string[];


    @BeforeInsert()
    checkFieldsBeforeInsert() {
        this.email = this.email.toLowerCase().trim();
    }

    @BeforeUpdate()
    checkFieldsBeforeUpdate() {
        this.checkFieldsBeforeInsert();   
    }

}
