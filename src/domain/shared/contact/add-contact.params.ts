import { ContactParams } from "./_contact.params";

export interface AddContactParams extends Omit<
    ContactParams,
    "dt_create" |
    "dt_modify" |
    "id" 
> { }