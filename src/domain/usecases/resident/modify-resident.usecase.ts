import { ResidentEntity } from "@/domain/entities/resident.entity";
import { IResidentRepository } from "@/domain/repositories/abstract-resident.repository";
import { ResidentParams } from "@/domain/shared/resident/_resident.params";
import { ModifyResidentParams } from "@/domain/shared/resident/modify-resident.params";
import { BadRequestException, Injectable } from "@nestjs/common";

@Injectable()
export class ModifyResidentUseCase {

    constructor(
        private residentRepository: IResidentRepository<
            ResidentEntity,
            ResidentParams
        >
    ) { }

    async execute(id: string, params: ModifyResidentParams): Promise<ResidentEntity> {
        await this.residentRepository.modify(id, params)
        const resident = await this.residentRepository.find({
            id: id
        })
        if (resident !== null) {
            return resident
        }

        throw new BadRequestException("Resident not found!")
    }

}