import { IsBoolean, IsEnum, IsMACAddress, IsString } from "class-validator";
import { BaseDTO } from "../base-dto";
import { ApiProperty } from "@nestjs/swagger";
import { randomUUID } from "crypto";
import { DeviceType } from "@/domain/entities/device.entity";

export class BaseDeviceDTO extends BaseDTO {
    @ApiProperty({
        example: randomUUID()
    })
    @IsString()
    homeID: string

    @ApiProperty({
        example: "AC-AD-0C-E4-CC-16"
    })
    @IsMACAddress()
    macAddress: string

    @ApiProperty({
        example: DeviceType.SMOKE_SENSOR
    })
    @IsEnum(DeviceType)
    type: DeviceType

    @ApiProperty({
        example: true
    })
    @IsBoolean()
    isActive: boolean

    @ApiProperty({
        example: "sala"
    })
    @IsString()
    location: string
}