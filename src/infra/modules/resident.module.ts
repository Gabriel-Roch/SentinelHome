import { Module } from "@nestjs/common";
import { Resident } from "../repositories/mysql/entities/resident.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { IResidentRepository } from "@/domain/repositories/abstract-resident.repository";
import { ResidentRepository } from "../repositories/resident.repository";
import { ResidentController } from "@/presentation/controllers/resident.controller";
import { FindResidentUseCase } from "@/domain/usecases/resident/find-resident.usecase";
import { AddResidentUseCase } from "@/domain/usecases/resident/add-resident.usecase";
import { ModifyResidentUseCase } from "@/domain/usecases/resident/modify-resident.usecase";
import { RemoveResidentUseCase } from "@/domain/usecases/resident/remove-resident.usecase";

@Module({
  imports: [
    TypeOrmModule.forFeature([Resident])
  ],
  controllers: [ResidentController],
  providers: [
    {
      provide: IResidentRepository,
      useClass: ResidentRepository,
    },
    FindResidentUseCase,
    AddResidentUseCase,
    ModifyResidentUseCase,
    RemoveResidentUseCase
  ],
  exports: [TypeOrmModule]
})

export class ResidentModule { }