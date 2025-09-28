import { UserParams } from "./_user.params";

export interface ModifyUserParams extends Partial<Omit<UserParams, "id">> { }