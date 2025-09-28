import { PickType } from "@nestjs/swagger";
import { BaseHomeDTO } from "./_base-home.dto";

export class AddHomeRequestDTO extends PickType(
    BaseHomeDTO,
    [
        "name",
        "userID"
    ] as const)
{ }
