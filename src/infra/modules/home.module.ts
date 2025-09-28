import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HomeRepository } from '../repositories/home.repository';
import { Home } from '../repositories/mysql/entities/home.entity';
import { IHomeRepository } from '@/domain/repositories/abstract-home.repository';
import { AddHomeUseCase } from '@/domain/usecases/home/add-home.usecase';
import { FindHomeUseCase } from '@/domain/usecases/home/find-home.usecase';
import { RemoveHomeUseCase } from '@/domain/usecases/home/remove-home.usecase';
import { ModifyHomeUseCase } from '@/domain/usecases/home/modify-home.usecase';
import { HomeController } from '@/presentation/controllers/home.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Home])
  ],
  controllers: [HomeController],
  providers: [
    {
      provide: IHomeRepository,
      useClass: HomeRepository,
    },
    AddHomeUseCase,
    FindHomeUseCase,
    RemoveHomeUseCase,
    ModifyHomeUseCase
  ],
  exports: [TypeOrmModule]
})

export class HomeModule { }
