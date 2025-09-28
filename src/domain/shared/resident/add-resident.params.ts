import { ResidentParams } from "./_resident.params";

export interface AddResidentParams extends Omit<
    ResidentParams,
    "dt_create" |
    "dt_modify" |
    "id" 
> { }