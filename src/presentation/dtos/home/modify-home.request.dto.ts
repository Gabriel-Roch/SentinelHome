import { PickType } from "@nestjs/swagger";
import { BaseHomeDTO } from "./_base-home.dto";

export class ModifyHomeRequestDTO extends PickType(
    BaseHomeDTO,
    [   
        "id",
        "name",
        "userID"
    ] as const)
{ }
