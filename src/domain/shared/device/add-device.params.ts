import { DeviceParams } from "./_device.params";

export interface AddDeviceParams extends Omit<
    DeviceParams,
    "dt_create" |
    "dt_modify" |
    "id" 
> { }