import { ContactParams } from "./_contact.params";

export interface ModifyContactParams extends Partial<Omit<ContactParams, "id">> { }