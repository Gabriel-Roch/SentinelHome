import { IsString } from "class-validator";
import { BaseDTO } from "../base-dto";
import { ApiProperty } from "@nestjs/swagger";
import { randomUUID } from "crypto";

export class BaseResidentDTO extends BaseDTO {
    @ApiProperty({
        example: "Gabriel"
    })
    @IsString()
    name: string

    @ApiProperty({
        example: 25
    })
    @IsString()
    age: number

    @ApiProperty({
        example: randomUUID()
    })
    @IsString()
    homeID: string
}