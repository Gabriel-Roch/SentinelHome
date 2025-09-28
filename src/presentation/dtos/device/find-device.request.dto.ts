import { PartialType } from "@nestjs/swagger";
import { BaseDeviceDTO } from "./_base-device.dto";

export class FindDeviceRequestDTO extends PartialType(BaseDeviceDTO) { }