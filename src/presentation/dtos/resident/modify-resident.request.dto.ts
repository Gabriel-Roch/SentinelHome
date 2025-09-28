import { PickType } from "@nestjs/swagger";
import { BaseResidentDTO } from "./_base-resident.dto";

export class ModifyResidentRequestDTO extends PickType(
    BaseResidentDTO,
    [   
        "id",
        "name",
        "homeID",
        "age"
    ] as const)
{ }
