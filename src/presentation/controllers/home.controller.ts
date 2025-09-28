import { AddHomeUseCase } from "@/domain/usecases/home/add-home.usecase";
import { RemoveHomeUseCase } from "@/domain/usecases/home/remove-home.usecase";
import { FindHomeUseCase } from "@/domain/usecases/home/find-home.usecase";
import { ModifyHomeUseCase } from "@/domain/usecases/home/modify-home.usecase";
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
    UsePipes,
    ValidationPipe
} from "@nestjs/common";
import { FindHomeRequestDTO } from "../dtos/home/find-home.request.dto";
import { FindHomeResponseDTO } from "../dtos/home/find-home.response.dto";
import { AddHomeRequestDTO } from "../dtos/home/add-home.request.dto";
import { AddHomeResponseDTO } from "../dtos/home/add-home.response.dto";
import { ModifyHomeRequestDTO } from "../dtos/home/modify-home.request.dto";
import { ModifyHomeResponseDTO } from "../dtos/home/modify-home.response.dto";

@Controller("home")
export class HomeController {

    constructor(
        private readonly addHomeUseCase: AddHomeUseCase,
        private readonly findHomeUseCase: FindHomeUseCase,
        private readonly modifyHomeUseCase: ModifyHomeUseCase,
        private readonly removeHomeUseCase: RemoveHomeUseCase
    ) { }

    @Get()
    @UsePipes(new ValidationPipe({ transform: true }))
    async find(
        @Query() params: FindHomeRequestDTO
    ): Promise<FindHomeResponseDTO[]> {
        return this.findHomeUseCase.execute(params)
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async add(@Body() params: AddHomeRequestDTO
    ): Promise<AddHomeResponseDTO> {
        return await this.addHomeUseCase.execute(params)
    }

    @Patch()
    @UsePipes(new ValidationPipe({ transform: true }))
    async modify(
        @Query('id') id: string,
        @Body() params: ModifyHomeRequestDTO
    ): Promise<ModifyHomeResponseDTO> {
        if (!id) {
            throw new BadRequestException("Query 'id' not found")
        }
        return await this.modifyHomeUseCase.execute(id, { ...params })
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
        await this.removeHomeUseCase.execute({ id })
    }

}