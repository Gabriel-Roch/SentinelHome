import { PartialType } from "@nestjs/swagger";
import { BaseContactDTO } from "./_base-contact.dto";

export class FindContactRequestDTO extends PartialType(BaseContactDTO) { }