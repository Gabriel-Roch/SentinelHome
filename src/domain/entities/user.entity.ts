import { BaseEntity } from "./base.entity";

export class UserEntity extends BaseEntity {

    username: string
    name: string
    isActive: boolean

    constructor(params: Partial<UserEntity>) {
        super(params)
        Object.assign(this, params)
    }
}