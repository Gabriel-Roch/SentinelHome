import { BaseParams } from "../base.params";

export interface ContactParams extends BaseParams {
    homeID: string
    name: string
    tell: string
    isActive: boolean
}