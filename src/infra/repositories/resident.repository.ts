import { ResidentEntity } from "@/domain/entities/resident.entity";
import { IResidentRepository } from "@/domain/repositories/abstract-resident.repository";
import { ResidentParams } from "@/domain/shared/resident/_resident.params";
import { Repository } from "typeorm";
import { Resident } from "./mysql/entities/resident.entity";
import { InjectRepository } from "@nestjs/typeorm";

export class ResidentRepository implements IResidentRepository<ResidentEntity, ResidentParams> {

    constructor(
        @InjectRepository(Resident)
        private residentRepository: Repository<Resident>
    ) { }

    async add(params: ResidentParams): Promise<ResidentEntity> {
        const newResident = this.residentRepository.create(params)
        return await this.residentRepository.save(newResident)
    }

    async findAll(params?: Partial<ResidentParams> | undefined): Promise<ResidentEntity[]> {
        return await this.residentRepository.find({
            where: params
        })
    }

    async find(params: Partial<ResidentParams>): Promise<ResidentEntity | null> {
        return await this.residentRepository.findOne({
            where: params
        })
    }

    async modify(id: string, params: Partial<ResidentParams>): Promise<void> {
        await this.residentRepository.update(id, params)
    }

    async remove(id: string): Promise<void> {
        await this.residentRepository.delete(id)
    }

    async existsBy(params: Partial<ResidentParams>): Promise<boolean> {
        return await this.residentRepository.existsBy(params)

    }

}