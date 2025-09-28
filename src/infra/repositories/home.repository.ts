import { IHomeRepository } from "@/domain/repositories/abstract-home.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { Home } from "./mysql/entities/home.entity";
import { Repository } from "typeorm";
import { HomeParams } from "@/domain/shared/home/_home.params";
import { HomeEntity } from "@/domain/entities/home.entity";

export class HomeRepository implements IHomeRepository<HomeEntity, HomeParams> {
    constructor(
        @InjectRepository(Home)
        private homeRepository: Repository<Home>
    ) { }

    async add(params: HomeParams): Promise<HomeEntity> {
        const newHome = this.homeRepository.create(params)
        return await this.homeRepository.save(newHome)
    }

    async findAll(params: Partial<HomeParams>): Promise<HomeEntity[]> {
        return await this.homeRepository.find({
            where: params
        })
    }

    async find(params: Partial<HomeParams>): Promise<HomeEntity | null> {
        return await this.homeRepository.findOne({
            where: params
        })
    }

    async modify(id: string, params: Partial<HomeParams>): Promise<void> {
        await this.homeRepository.update(id, params)
    }

    async remove(id: string): Promise<void> {
        await this.homeRepository.delete(id)
    }

    async existsBy(params: Partial<HomeParams>): Promise<boolean> {
        return await this.homeRepository.existsBy(params)
    }
} 