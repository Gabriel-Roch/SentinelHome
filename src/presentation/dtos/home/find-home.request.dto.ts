import { PartialType } from "@nestjs/swagger";
import { BaseHomeDTO } from "./_base-home.dto";

export class FindHomeRequestDTO extends PartialType(BaseHomeDTO) { }