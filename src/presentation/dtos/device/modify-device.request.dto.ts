import { PickType } from "@nestjs/swagger";
import { BaseDeviceDTO } from "./_base-device.dto";

export class ModifyDeviceRequestDTO extends PickType(
    BaseDeviceDTO,
    [
        "id",
        
        "homeID"
    ] as const)
{ }
