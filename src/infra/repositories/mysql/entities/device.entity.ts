import { Column, Entity } from "typeorm";
import { Base } from "./base.entity";
import { DeviceType } from "@/domain/entities/device.entity";

@Entity('device')
export class Device extends Base {
    @Column('varchar', {
        length: 36
    })
    homeID: string

    @Column('varchar', {
        length: 20
    })
    macAddress: string

    @Column('boolean')
    isActive: boolean

    @Column('varchar')
    type: DeviceType

    @Column('varchar', {
        length: 80
    })
    location: string
}