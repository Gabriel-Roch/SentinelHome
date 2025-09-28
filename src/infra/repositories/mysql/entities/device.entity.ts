import { Column, Entity } from "typeorm";
import { Base } from "./base.entity";

@Entity('device')
export class Device extends Base {
    @Column('varchar', {
        length: 36
    })
    homeID: string

    @Column('varchar', {
        length: 120
    })
    name: string
}