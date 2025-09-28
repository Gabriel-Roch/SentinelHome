export class BaseEntity {

    id: string
    dt_create: Date
    dt_modify: Date

    constructor(params: Partial<BaseEntity>) {
        Object.assign(this, params)
    }
}