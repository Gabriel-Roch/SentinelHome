import { HomeEntity } from "@/domain/entities/home.entity";
import { UserEntity } from "@/domain/entities/user.entity";
import { IHomeRepository } from "@/domain/repositories/abstract-home.repository";
import { HomeParams } from "@/domain/shared/home/_home.params";
import { ModifyHomeParams } from "@/domain/shared/home/modify-home.params";
import { BadRequestException, Injectable } from "@nestjs/common";

@Injectable()
export class ModifyHomeUseCase {
    constructor(
        private readonly homeRepository: IHomeRepository<
            HomeEntity,
            HomeParams
        >
    ) { }

    async execute(id: string, params: Partial<ModifyHomeParams>) : Promise<HomeEntity> {
        await this.homeRepository.modify(id, params)
        const user = await this.homeRepository.find({
            id: id
        })

        if (user === null) {
            throw new BadRequestException("home not found")
        }
        return user
    }
}