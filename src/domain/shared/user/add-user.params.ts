import { UserParams } from "./_user.params";

export interface AddUserParams extends Omit<
    UserParams,
    "dt_create" |
    "dt_modify" |
    "id" |
    "refreshToken"
> { }