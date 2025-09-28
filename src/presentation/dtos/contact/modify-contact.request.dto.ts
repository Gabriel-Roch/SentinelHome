import { PickType } from "@nestjs/swagger";
import { BaseContactDTO } from "./_base-contact.dto";

export class ModifyContactRequestDTO extends PickType(
    BaseContactDTO,
    [
        "id",
        "name",
        "homeID",
        "tell",
        "isActive"
    ] as const)
{ }
