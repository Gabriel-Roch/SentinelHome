import { HomeEntity } from "@/domain/entities/home.entity";
import { IHomeRepository } from "@/domain/repositories/abstract-home.repository";
import { HomeParams } from "@/domain/shared/home/_home.params";
import { FindHomeParams } from "@/domain/shared/home/find-home.params";
import { Injectable } from "@nestjs/common";

@Injectable()
export class FindHomeUseCase {
    constructor(
        private readonly homeRepository: IHomeRepository<
            HomeEntity,
            HomeParams
        >
    ) { }

    async execute(params: Partial<FindHomeParams>): Promise<HomeEntity[]> {
        return await this.homeRepository.findAll(params);
    }
}
