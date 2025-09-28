import { PartialType } from "@nestjs/swagger";
import { BaseUserDTO } from "./_base-user.dto";

export class FindUserRequestDTO extends PartialType(BaseUserDTO) { }