import { BaseParams } from "../base.params";

export interface UserParams extends BaseParams {
    username: string
    name: string
    isActive: boolean
    refreshToken: string
}