import { DeviceEntity } from "@/domain/entities/device.entity";
import { HomeEntity } from "@/domain/entities/home.entity";
import { IDeviceRepository } from "@/domain/repositories/abstract-device.repository";
import { IHomeRepository } from "@/domain/repositories/abstract-home.repository";
import { DeviceParams } from "@/domain/shared/device/_device.params";
import { AddDeviceParams } from "@/domain/shared/device/add-device.params";
import { HomeParams } from "@/domain/shared/home/_home.params";
import { BadRequestException, Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";

@Injectable()
export class AddDeviceUseCase {
    constructor(
        private deviceRepository: IDeviceRepository<
            DeviceEntity,
            DeviceParams
        >,
        private homeRepository: IHomeRepository<
            HomeEntity,
            HomeParams
        >
    ) { }

    async execute(params: AddDeviceParams): Promise<DeviceEntity> {

        const existsHome = await this.homeRepository.existsBy({
            id: params.homeID
        })

        if (existsHome === false) {
            throw new BadRequestException("home not found!")
        }

        const newDevice = new DeviceEntity({
            id: randomUUID(),
            homeID: params.homeID,
            macAddress: params.macAddress,
            type: params.type,
            isActive: true,
            location: params.location,
            dt_create: new Date()
        })

        return await this.deviceRepository.add(newDevice)
    }

}