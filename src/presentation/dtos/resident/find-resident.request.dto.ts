import { PartialType } from "@nestjs/swagger";
import { BaseResidentDTO } from "./_base-resident.dto";

export class FindResidentRequestDTO extends PartialType(BaseResidentDTO) { }