import { Column, Entity } from "typeorm";
import { Base } from "./base.entity";

@Entity('resident')
export class Resident extends Base {
    @Column('varchar', {
        length: 120
    })
    name: string

    @Column("int", {
        width: 3
    })
    age: number

    @Column("varchar", {
        length: 36
    })
    homeID: string
}