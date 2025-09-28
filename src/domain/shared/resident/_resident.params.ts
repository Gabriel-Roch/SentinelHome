import { BaseParams } from "../base.params";

export interface ResidentParams extends BaseParams {
    name: string
    age: number
    homeID: string
}