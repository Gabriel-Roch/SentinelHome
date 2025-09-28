import { ApiProperty } from "@nestjs/swagger"
import { IsBoolean, IsString } from "class-validator"
import { BaseDTO } from "../base-dto"

export class BaseUserDTO extends BaseDTO {
    @ApiProperty({
        example: "gabriel.rocha"
    })
    @IsString()
    username: string

    @ApiProperty({
        example: "Gabriel Rocha"
    })
    @IsString()
    name: string

    @ApiProperty({
        example: true
    })
    @IsBoolean()
    isActive: boolean

    @ApiProperty({
        example: ""
    })
    @IsString()
    refreshToken: string
}