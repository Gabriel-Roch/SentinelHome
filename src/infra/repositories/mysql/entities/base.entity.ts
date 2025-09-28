import { Column, PrimaryColumn } from 'typeorm';

export class Base {
    @PrimaryColumn('varchar', {
        length: 36
    })
    id: string

    @Column("timestamp", {
        nullable: true,
        default: null
    })
    dt_create: Date


    @Column("timestamp", {
        nullable: true,
        default: null
    })
    dt_modify: Date 
}