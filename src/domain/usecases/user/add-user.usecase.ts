import { UserEntity } from "@/domain/entities/user.entity";
import { IUserRepository } from "@/domain/repositories/abstract-user.repository";
import { AddUserParams } from "@/domain/shared/user/add-user.params";
import { UserParams } from "@/domain/shared/user/_user.params";
import { BadRequestException, Injectable } from "@nestjs/common";
import { randomUUID } from "node:crypto";

@Injectable()
export class AddUserUseCase {
    constructor(
        private readonly userRepository: IUserRepository<
            UserEntity,
            UserParams
        >
    ) { }

    async execute(params: AddUserParams): Promise<UserEntity> {
        const usernameExists = await this.userRepository.existsBy({
            username: params.username
        })

        if (usernameExists === true) {
            throw new BadRequestException("Username already registered!")
        }

        const newUser = new UserEntity({
            id: randomUUID(),
            name: params.name,
            username: params.username,
            isActive: params.isActive,
            dt_create: new Date()
        })
        
        return await this.userRepository.add(newUser)
    }
}