import { DeviceEntity } from "@/domain/entities/device.entity";
import { IDeviceRepository } from "@/domain/repositories/abstract-device.repository";
import { DeviceParams } from "@/domain/shared/device/_device.params";
import { RemoveDeviceParams } from "@/domain/shared/device/remove-devicce.params";
import { Injectable } from "@nestjs/common";

@Injectable
()
export class RemoveDeviceUseCase {
    constructor(
        private deviceRepository: IDeviceRepository<
            DeviceEntity,
            DeviceParams
        >
    ) { }

    async execute(params: RemoveDeviceParams): Promise<void> {
        await this.deviceRepository.remove(params.id)
    }
}