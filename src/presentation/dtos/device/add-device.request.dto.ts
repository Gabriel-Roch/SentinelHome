import { PickType } from "@nestjs/swagger";
import { BaseDeviceDTO } from "./_base-device.dto";

export class AddDeviceRequestDTO extends PickType(
    BaseDeviceDTO,
    [   
        "macAddress",
        "isActive",
        "type",
        "homeID",
        "location"
    ] as const)
{ }
