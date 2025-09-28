import { UserEntity } from "@/domain/entities/user.entity";
import { IUserRepository } from "@/domain/repositories/abstract-user.repository";
import { UserParams } from "@/domain/shared/user/_user.params";
import { FindUserParams } from "@/domain/shared/user/find-user.params";
import { Injectable } from "@nestjs/common";

@Injectable()
export class FindUserUseCase {
    constructor(
        private readonly userRepository: IUserRepository<
            UserEntity,
            UserParams
        >
    ) { }

    async execute(params?: Partial<FindUserParams>): Promise<UserEntity[]> {
        return await this.userRepository.findAll(params);
    }
}
