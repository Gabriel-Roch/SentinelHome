import { AddDeviceUseCase } from "@/domain/usecases/device/add-device.usecase";
import { FindDeviceUseCase } from "@/domain/usecases/device/find-device.usecase";
import { ModifyDeviceUseCase } from "@/domain/usecases/device/modify-device.usecase";
import { RemoveDeviceUseCase } from "@/domain/usecases/device/remove-device.usecase";
import {
    BadRequestException,
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Query,
    UseFilters,
    UsePipes,
    ValidationPipe
} from "@nestjs/common";
import { FindDeviceRequestDTO } from "../dtos/device/find-device.request.dto";
import { FindDeviceResponseDTO } from "../dtos/device/find-device.response.dto";
import { AddDeviceRequestDTO } from "../dtos/device/add-device.request.dto";
import { AddDeviceResponseDTO } from "../dtos/device/add-device.response.dto";
import { ModifyDeviceRequestDTO } from "../dtos/device/modify-device.request.dto";
import { ModifyDeviceResponseDTO } from "../dtos/device/modify-device.response.dto";
import { HttpExceptionFilter } from "../filters/http-exception.filter";

@Controller('device')
@UseFilters(new HttpExceptionFilter())
export class DeviceController {

    constructor(
        private readonly addDeviceUseCase: AddDeviceUseCase,
        private readonly findDeviceUseCase: FindDeviceUseCase,
        private readonly modifyDeviceUseCase: ModifyDeviceUseCase,
        private readonly removeDeviceUseCase: RemoveDeviceUseCase
    ) { }

    @Get()
    @UsePipes(new ValidationPipe({ transform: true }))
    async find(
        @Query() params: FindDeviceRequestDTO
    ): Promise<FindDeviceResponseDTO[]> {
        return this.findDeviceUseCase.execute(params)
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async add(@Body() params: AddDeviceRequestDTO
    ): Promise<AddDeviceResponseDTO> {
        return await this.addDeviceUseCase.execute(params)
    }

    @Patch()
    @UsePipes(new ValidationPipe({ transform: true }))
    async modify(
        @Query('id') id: string,
        @Body() params: ModifyDeviceRequestDTO
    ): Promise<ModifyDeviceResponseDTO> {
        if (!id) {
            throw new BadRequestException("Query 'id' not found")
        }
        return await this.modifyDeviceUseCase.execute(id, { ...params })
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
        await this.removeDeviceUseCase.execute({ id })
    }

}