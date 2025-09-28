import { AddResidentUseCase } from "@/domain/usecases/resident/add-resident.usecase";
import { FindResidentUseCase } from "@/domain/usecases/resident/find-resident.usecase";
import { ModifyResidentUseCase } from "@/domain/usecases/resident/modify-resident.usecase";
import { RemoveResidentUseCase } from "@/domain/usecases/resident/remove-resident.usecase";
import {
    Controller,
    BadRequestException,
    Body,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Query,
    UsePipes,
    ValidationPipe
} from "@nestjs/common";
import { FindResidentRequestDTO } from "../dtos/resident/find-resident.request.dto";
import { FindResidentResponseDTO } from "../dtos/resident/find-resident.response.dto";
import { AddResidentRequestDTO } from "../dtos/resident/add-resident.request.dto";
import { AddResidentResponseDTO } from "../dtos/resident/add-resident.response.dto";
import { ModifyResidentRequestDTO } from "../dtos/resident/modify-resident.request.dto";
import { ModifyResidentResponseDTO } from "../dtos/resident/modify-resident.response.dto";

@Controller('resident')
export class ResidentController {

    constructor(
        private readonly addResidentUseCase: AddResidentUseCase,
        private readonly findResidentUseCase: FindResidentUseCase,
        private readonly modifyResidentUseCase: ModifyResidentUseCase,
        private readonly removeResidentUseCase: RemoveResidentUseCase
    ) { }

    @Get()
    @UsePipes(new ValidationPipe({ transform: true }))
    async find(
        @Query() params: FindResidentRequestDTO
    ): Promise<FindResidentResponseDTO[]> {
        return this.findResidentUseCase.execute(params)
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async add(@Body() params: AddResidentRequestDTO
    ): Promise<AddResidentResponseDTO> {
        return await this.addResidentUseCase.execute(params)
    }

    @Patch()
    @UsePipes(new ValidationPipe({ transform: true }))
    async modify(
        @Query('id') id: string,
        @Body() params: ModifyResidentRequestDTO
    ): Promise<ModifyResidentResponseDTO> {
        if (!id) {
            throw new BadRequestException("Query 'id' not found")
        }
        return await this.modifyResidentUseCase.execute(id, { ...params })
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
        await this.removeResidentUseCase.execute({ id })
    }

}
