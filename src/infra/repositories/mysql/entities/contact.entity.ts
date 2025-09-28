import { Column, Entity } from "typeorm";
import { Base } from "./base.entity";

@Entity('contact')
export class Contact extends Base {
    @Column('varchar', {
        length: 36
    })
    homeID: string

    @Column('varchar', {
        length: 120
    })
    name: string

    @Column('varchar', {
        length: 15
    })
    tell: string

    @Column('boolean')
    isActive: boolean
}