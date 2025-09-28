import { UserEntity } from "@/domain/entities/user.entity";
import { IUserRepository } from "@/domain/repositories/abstract-user.repository";
import { ModifyUserParams } from "@/domain/shared/user/modify-user.params";
import { UserParams } from "@/domain/shared/user/_user.params";
import { BadRequestException, Injectable } from "@nestjs/common";

@Injectable()
export class ModifyUserUseCase {
    constructor(
        private readonly userRepository: IUserRepository<
            UserEntity,
            UserParams
        >
    ) { }

    async execute(id: string, params: Partial<ModifyUserParams>) {
        await this.userRepository.modify(id, params)
        const user = await this.userRepository.find({
            id : id
         })
        if (user === null) {
            throw new BadRequestException("user not found")
        }
        return user
    }
}