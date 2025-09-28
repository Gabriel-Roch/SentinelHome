import { ResidentEntity } from "@/domain/entities/resident.entity";
import { IResidentRepository } from "@/domain/repositories/abstract-resident.repository";
import { ResidentParams } from "@/domain/shared/resident/_resident.params";
import { FindResidentParams } from "@/domain/shared/resident/find-resident.params";
import { Injectable } from "@nestjs/common";

@Injectable()
export class FindResidentUseCase {

    constructor(
        private residentRepository: IResidentRepository<
            ResidentEntity,
            ResidentParams
        >
    ) { }

    async execute(params: Partial<FindResidentParams>): Promise<ResidentEntity[]> {
        return await this.residentRepository.findAll(params)
    }
}