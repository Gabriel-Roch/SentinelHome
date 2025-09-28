import { Injectable } from "@nestjs/common";
import { IUserRepository } from "@/domain/repositories/abstract-user.repository"
import { UserEntity } from "@/domain/entities/user.entity";
import { RemoveUserParams } from "@/domain/shared/user/remove-user.params";
import { UserParams } from "@/domain/shared/user/_user.params";

@Injectable()
export class RemoveUserUseCase {
    constructor(
        private readonly userRepository: IUserRepository<
            UserEntity,
            UserParams
        >
    ) { }

    async execute(params: RemoveUserParams): Promise<void> {
        await this.userRepository.remove(params.id)
    }
}