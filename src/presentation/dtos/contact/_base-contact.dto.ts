import { IsBoolean, IsString } from "class-validator";
import { BaseDTO } from "../base-dto";
import { ApiProperty } from "@nestjs/swagger";
import { randomUUID } from "crypto";

export class BaseContactDTO extends BaseDTO {
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
        example: "929999999"
    })
    @IsString()
    tell: string

    @ApiProperty({
        example: true
    })
    @IsBoolean()
    isActive: boolean
}