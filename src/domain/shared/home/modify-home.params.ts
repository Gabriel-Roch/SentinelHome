import { HomeParams } from "./_home.params";

export interface ModifyHomeParams extends Partial<Omit<HomeParams, "id">> { }