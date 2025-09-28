import { DeviceEntity } from "@/domain/entities/device.entity";
import { IDeviceRepository } from "@/domain/repositories/abstract-device.repository";
import { DeviceParams } from "@/domain/shared/device/_device.params";
import { Repository } from "typeorm";
import { Device } from "./mysql/entities/device.entity";
import { InjectRepository } from "@nestjs/typeorm";

export class DeviceRepository implements IDeviceRepository<DeviceEntity, DeviceParams> {
    constructor(
        @InjectRepository(Device)
        private deviceRepository: Repository<Device>
    ) { }

    async add(params: DeviceParams): Promise<DeviceEntity> {
        const newDevice = this.deviceRepository.create(params)
        return await this.deviceRepository.save(newDevice)
    }

    async findAll(params?: Partial<DeviceParams> | undefined): Promise<DeviceEntity[]> {
        return await this.deviceRepository.find({
            where: params
        })
    }

    async find(params: Partial<DeviceParams>): Promise<DeviceEntity | null> {
        return await this.deviceRepository.findOne({
            where: params
        })
    }

    async modify(id: string, params: Partial<DeviceParams>): Promise<void> {
        await this.deviceRepository.update(id, params)
    }

    async remove(id: string): Promise<void> {
        await this.deviceRepository.delete(id)
    }

    async existsBy(params: Partial<DeviceParams>): Promise<boolean> {
        return await this.deviceRepository.existsBy(params)
    }
}