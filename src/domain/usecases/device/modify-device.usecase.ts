import { DeviceEntity } from "@/domain/entities/device.entity";
import { IDeviceRepository } from "@/domain/repositories/abstract-device.repository";
import { DeviceParams } from "@/domain/shared/device/_device.params";
import { ModifyDeviceParams } from "@/domain/shared/device/modify-device.params";
import { BadRequestException, Injectable } from "@nestjs/common";

@Injectable()
export class ModifyDeviceUseCase {
    constructor(
        private deviceRepository: IDeviceRepository<
            DeviceEntity,
            DeviceParams
        >
    ) { }

    async execute(id: string, params: Partial<ModifyDeviceParams>): Promise<DeviceEntity> {
        await this.deviceRepository.modify(id, params)
        const device = await this.deviceRepository.find({
            id: id
        })
        if (device !== null) {
            return device
        }
        throw new BadRequestException("device not found!")
    }

}