import { IsString } from "class-validator";
import { BaseDTO } from "../base-dto";
import { ApiProperty } from "@nestjs/swagger";
import { randomUUID } from "crypto";

export class BaseHomeDTO extends BaseDTO {
    @ApiProperty({
        example: "Gabriel"
    })
    @IsString()
    name: string

    @ApiProperty({
        example: randomUUID()
    })
    @IsString()
    userID: string
}