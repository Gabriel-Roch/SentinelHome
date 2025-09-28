import { Column, Entity } from "typeorm";
import { Base } from "./base.entity";

@Entity('home')
export class Home extends Base {
    @Column('varchar', {
        length: 45
    })
    name: string

    @Column('varchar', {
        length: 36
    })
    userID: string
}