import { PickType } from "@nestjs/swagger";
import { BaseDeviceDTO } from "./_base-device.dto";

export class AddDeviceRequestDTO extends PickType(
    BaseDeviceDTO,
    [
        "name",
        "homeID",
        "location"
    ] as const)
{ }
