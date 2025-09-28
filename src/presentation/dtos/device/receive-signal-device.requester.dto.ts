import { DeviceType } from "@/domain/entities/device.entity"
import { ApiProperty } from "@nestjs/swagger"
import { IsEnum, IsMACAddress, IsString } from "class-validator"
import { randomUUID } from "crypto"


export class ReceiveSignalDeviceRequesterDTO {
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
}