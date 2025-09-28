import { DeviceParams } from "./_device.params";

export interface ModifyDeviceParams extends Partial<Omit<DeviceParams, "id">> { }