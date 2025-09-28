import { HomeEntity } from "@/domain/entities/home.entity";
import { IHomeRepository } from "@/domain/repositories/abstract-home.repository";
import { AddHomeParams } from "@/domain/shared/home/add-home.params";
import { HomeParams } from "@/domain/shared/home/_home.params";
import { BadRequestException, Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";

@Injectable()
export class AddHomeUseCase {
    constructor(
        private readonly homeRepository: IHomeRepository<
            HomeEntity,
            HomeParams
        >
    ) { }

    async execute(params: AddHomeParams): Promise<HomeEntity> {

        const homeExists = await this.homeRepository.existsBy({
            userID: params.userID,
            name: params.name
        })

        if (homeExists === true) {
            throw new BadRequestException("Home already registered")
        }

        const newHome = new HomeEntity({
            id: randomUUID(),
            name: params.name,
            userID: params.userID,
            dt_create: new Date(),
            dt_modify: undefined
        })

        return await this.homeRepository.add(newHome)
    }
}