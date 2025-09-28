import { ResidentParams } from "./_resident.params";

export interface ModifyResidentParams extends Partial<Omit<ResidentParams, "id">> { }