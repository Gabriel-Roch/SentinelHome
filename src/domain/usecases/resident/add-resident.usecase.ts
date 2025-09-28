import { ResidentEntity } from "@/domain/entities/resident.entity";
import { IResidentRepository } from "@/domain/repositories/abstract-resident.repository";
import { ResidentParams } from "@/domain/shared/resident/_resident.params";
import { AddResidentParams } from "@/domain/shared/resident/add-resident.params";
import { Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";

@Injectable()
export class AddResidentUseCase {

    constructor(
        private residentRepository: IResidentRepository<
            ResidentEntity,
            ResidentParams
        >
    ) { }

    async execute(params: AddResidentParams): Promise<ResidentEntity> {
        const newResident = new ResidentEntity({
            id: randomUUID(),
            ...params,
            dt_create: new Date()
        })
        return await this.residentRepository.add(newResident)
    }
}