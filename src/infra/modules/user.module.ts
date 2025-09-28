import { RemoveUserUseCase } from '@/domain/usecases/user/remove-user.usecase';
import { UserController } from '@/presentation/controllers/user.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../repositories/mysql/entities/user.schema';
import { IUserRepository } from '@/domain/repositories/abstract-user.repository';
import { UserRepository } from '../repositories/user.repository';
import { FindUserUseCase } from "@/domain/usecases/user/find-user.usecase";
import { ModifyUserUseCase } from '@/domain/usecases/user/modify-user.usecase';
import { AddUserUseCase } from '@/domain/usecases/user/add-user.usecase';

@Module({
  imports: [
    TypeOrmModule.forFeature([User])
  ],
  controllers: [UserController],
  providers: [
    {
      provide: IUserRepository,
      useClass: UserRepository,
    },
    FindUserUseCase,
    RemoveUserUseCase,
    AddUserUseCase,
    ModifyUserUseCase
  ],
  exports: [TypeOrmModule]
})

export class UserModule { }
