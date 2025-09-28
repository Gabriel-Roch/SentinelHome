import { DeviceType } from "@/domain/entities/device.entity";
import { BaseParams } from "../base.params";

export interface DeviceParams extends BaseParams {
    homeID: string
    location: string
    type: DeviceType
    macAddress: string
    isActive: boolean
}