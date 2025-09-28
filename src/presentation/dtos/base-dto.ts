import { ApiProperty } from "@nestjs/swagger"
import { IsDate, IsString, IsUUID } from "class-validator"
import { randomUUID } from "crypto"

export class BaseDTO {
    @ApiProperty({
        example: randomUUID()
    })
    @IsUUID()
    id: string
    
    @ApiProperty({
        example: new Date()
    })
    @IsDate()
    dt_create: Date

    @ApiProperty()
    @IsDate()
    dt_modify: Date
}