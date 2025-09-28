import { Column, Entity } from "typeorm";
import { Base } from "./base.entity";

@Entity('user')
export class User extends Base {
    @Column('varchar')
    username: string

    @Column('varchar')
    name: string

    @Column('boolean')
    isActive: boolean

    @Column('varchar', {
        length: 255,
        nullable: true
    })
    refreshToken: string
}