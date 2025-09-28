import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DeviceController } from "@/presentation/controllers/device.controller";
import { IDeviceRepository } from "@/domain/repositories/abstract-device.repository";
import { DeviceRepository } from "../repositories/device.repositoy";
import { FindDeviceUseCase } from "@/domain/usecases/device/find-device.usecase";
import { AddDeviceUseCase } from "@/domain/usecases/device/add-device.usecase";
import { ModifyDeviceUseCase } from "@/domain/usecases/device/modify-device.usecase";
import { RemoveDeviceUseCase } from "@/domain/usecases/device/remove-device.usecase";
import { Device } from "../repositories/mysql/entities/device.entity";
import { IHomeRepository } from "@/domain/repositories/abstract-home.repository";
import { HomeRepository } from "../repositories/home.repository";
import { Home } from "../repositories/mysql/entities/home.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Device,
      Home
    ])
  ],
  controllers: [DeviceController],
  providers: [
    {
      provide: IDeviceRepository,
      useClass: DeviceRepository,
    },
    {
      provide: IHomeRepository,
      useClass: HomeRepository
    },
    FindDeviceUseCase,
    AddDeviceUseCase,
    ModifyDeviceUseCase,
    RemoveDeviceUseCase
  ],
  exports: [TypeOrmModule]
})

export class DeviceModule { }