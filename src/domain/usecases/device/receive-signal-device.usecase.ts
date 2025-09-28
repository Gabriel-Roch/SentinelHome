import { DeviceEntity } from "@/domain/entities/device.entity";
import { HomeEntity } from "@/domain/entities/home.entity";
import { IDeviceRepository } from "@/domain/repositories/abstract-device.repository";
import { IHomeRepository } from "@/domain/repositories/abstract-home.repository";
import { DeviceParams } from "@/domain/shared/device/_device.params";
import { ReceiveSignalDeviceParams } from "@/domain/shared/device/receive-signal-device.params";
import { HomeParams } from "@/domain/shared/home/_home.params";
import { BadRequestException, Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";


@Injectable()
export class ReceiveSignalDeviceUseCase {

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

    async execute(params: ReceiveSignalDeviceParams) {

        const existsHome = await this.homeRepository.existsBy({
            id: params.homeID
        })

        if (existsHome === false) {
            throw new BadRequestException("home not found!")
        }

        const existsDevice = await this.deviceRepository.existsBy({
            homeID: params.homeID,
            macAddress: params.macAddress
        })

        if (existsDevice === false) {
            const newDevice = new DeviceEntity({
                id: randomUUID(),
                type: params.type,
                homeID: params.homeID,
                macAddress: params.macAddress,
                isActive: false
            })
            await this.deviceRepository.add(newDevice)
        }

        const device = await this.deviceRepository.find({
            homeID: params.homeID,
            macAddress: params.macAddress
        })


        if (device === null) {
            throw new BadRequestException("device not found!")
        }


        if (device.isActive) {
            /** verificar os parametros e checar se e para disparar alarmes */
            return {
                status : "device enabled",
                message: "signal ok"
            }
        }

        if (device.isActive === false) {
            return {
                status : "device disabled",
                message: "signal ok"
            }
        }


    }
}