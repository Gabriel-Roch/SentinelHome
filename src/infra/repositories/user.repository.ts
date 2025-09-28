import { UserEntity } from "@/domain/entities/user.entity";
import { IUserRepository } from "@/domain/repositories/abstract-user.repository";
import { UserParams } from "@/domain/shared/user/_user.params";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./mysql/entities/user.schema";
import { Repository } from "typeorm";

export class UserRepository implements IUserRepository<UserEntity, UserParams> {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<UserParams>
    ) { }

    async add(params: UserParams): Promise<UserEntity> {
        const user = this.userRepository.create(params)
        return await this.userRepository.save(user)
    }

    async findAll(params: Partial<UserParams>): Promise<UserEntity[]> {
        return await this.userRepository.find({
            where: params
        })
    }

    async find(params: Partial<UserParams>): Promise<UserEntity | null> {
        return this.userRepository.findOne({
            where: params
        })
    }

    async modify(id: string, params: Partial<UserParams>): Promise<void> {
        await this.userRepository.update(id, params)
    }

    async remove(id: string): Promise<void> {
        await this.userRepository.delete(id)
    }

    async existsBy(params: Partial<UserParams>): Promise<boolean> {
        return await this.userRepository.existsBy(params)
    }

}