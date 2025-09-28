import { DeviceType } from "@/domain/entities/device.entity"

export interface ReceiveSignalDeviceParams {
    homeID : string
    macAddress : string
    type : DeviceType
}