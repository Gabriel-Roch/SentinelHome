import { BaseEntity } from "./base.entity"

export class ResidentEntity extends BaseEntity {

    name: string
    age: number
    homeID: string

    constructor(params: Partial<ResidentEntity>) {
        super(params)
        Object.assign(this, params)
    }
}