import { HomeParams } from "./_home.params";

export interface AddHomeParams extends Omit<
    HomeParams,
    "dt_create" |
    "dt_modify" |
    "id" 
> { }