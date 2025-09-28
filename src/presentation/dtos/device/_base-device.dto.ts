import { IsString } from "class-validator";
import { BaseDTO } from "../base-dto";
import { ApiProperty } from "@nestjs/swagger";
import { randomUUID } from "crypto";

export class BaseDeviceDTO extends BaseDTO {
    @ApiProperty({
        example: randomUUID()
    })
    @IsString()
    homeID: string

    @ApiProperty({
        example: "Gabriel"
    })
    @IsString()
    name: string

    @ApiProperty({
        example: "sala"
    })
    @IsString()
    location: string
}