import { BaseEntity } from "./base.entity";

export enum DeviceType {
    MOTION_SENSOR = "motion_sensor",
    DOOR_SENSOR = "door_sensor",
    SMOKE_SENSOR = "smoke_sensor",
    GAS_SENSOR = "gas_sensor"
}

export class DeviceEntity extends BaseEntity {

    homeID: string
    macAddress: string
    type: DeviceType
    /**Adicionar colunas referentes a parametros que serao recebidos dos dispositivos */
    location: string
    isActive: boolean

    constructor(params: Partial<DeviceEntity>) {
        super(params)
        Object.assign(this, params)
    }

}