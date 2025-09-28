import { PickType } from "@nestjs/swagger";
import { BaseContactDTO } from "./_base-contact.dto";

export class AddContactRequestDTO extends PickType(
    BaseContactDTO,
    [
        "name",
        "isActive",
        "homeID",
        "tell"
    ] as const)
{ }
