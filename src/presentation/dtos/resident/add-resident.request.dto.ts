import { PickType } from "@nestjs/swagger";
import { BaseResidentDTO } from "./_base-resident.dto";

export class AddResidentRequestDTO extends PickType(
    BaseResidentDTO,
    [
        "name",
        "homeID",
        "age"
    ] as const)
{ }
