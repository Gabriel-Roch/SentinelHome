import { PickType } from "@nestjs/swagger";
import { BaseUserDTO } from "./_base-user.dto";

export class ModifyUserRequestDTO extends PickType(
    BaseUserDTO,
    [
        "username",
        "name",
        "isActive"
    ] as const)
{ }
