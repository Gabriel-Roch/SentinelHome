import { Injectable } from "@nestjs/common";
import { IHomeRepository } from "@/domain/repositories/abstract-home.repository";
import { HomeEntity } from "@/domain/entities/home.entity";
import { RemoveHomeParams } from "@/domain/shared/home/remove-home.params";
import { HomeParams } from "@/domain/shared/home/_home.params";

@Injectable()
export class RemoveHomeUseCase {
    constructor(
        private readonly homeRepository: IHomeRepository<
            HomeEntity,
            HomeParams
        >
    ) { }

    async execute(params: RemoveHomeParams): Promise<void> {
        await this.homeRepository.remove(params.id)
    }
}