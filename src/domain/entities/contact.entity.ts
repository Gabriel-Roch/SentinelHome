import { BaseEntity } from "./base.entity";

export class ContactEntity extends BaseEntity {

    homeID: string
    name: string
    tell: string
    isActive: boolean

    constructor(params: Partial<ContactEntity>) {
        super(params)
        Object.assign(this, params)
    }
}
