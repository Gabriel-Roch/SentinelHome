import { BaseEntity } from "./base.entity"

export class HomeEntity extends BaseEntity {
    
    name: string
    userID: string

    constructor(params: Partial<HomeEntity>) {
        super(params)
        Object.assign(this, params)
    }

}