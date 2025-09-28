import { ResidentEntity } from "@/domain/entities/resident.entity";
import { IResidentRepository } from "@/domain/repositories/abstract-resident.repository";
import { ResidentParams } from "@/domain/shared/resident/_resident.params";
import { RemoveResidentParams } from "@/domain/shared/resident/remove-resident.params";
import { Injectable } from "@nestjs/common";

@Injectable()
export class RemoveResidentUseCase {

    constructor(
        private residentRepository: IResidentRepository<
            ResidentEntity,
            ResidentParams
        >
    ) { }

    async execute(params: RemoveResidentParams) {
        return await this.residentRepository.remove(params.id)
    }

}