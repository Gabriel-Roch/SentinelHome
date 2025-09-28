import { BaseEntity } from "./base.entity";

export class DeviceEntity extends BaseEntity {

    homeID: string
    name: string

    constructor(params: Partial<DeviceEntity>) {
        super(params)
        Object.assign(this, params)
    }

}