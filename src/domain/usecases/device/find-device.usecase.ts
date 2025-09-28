import { DeviceEntity } from "@/domain/entities/device.entity";
import { IDeviceRepository } from "@/domain/repositories/abstract-device.repository";
import { DeviceParams } from "@/domain/shared/device/_device.params";
import { FindDeviceParams } from "@/domain/shared/device/find-device.params";
import { Injectable } from "@nestjs/common";

@Injectable()
export class FindDeviceUseCase {
    constructor(
        private deviceRepository: IDeviceRepository<
            DeviceEntity,
            DeviceParams
        >
    ) { }

    async execute(params: Partial<FindDeviceParams>): Promise<DeviceEntity[]> {
        return await this.deviceRepository.findAll(params)
    }

}