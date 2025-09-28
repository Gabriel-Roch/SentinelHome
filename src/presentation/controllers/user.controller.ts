import { AddUserUseCase } from "@/domain/usecases/user/add-user.usecase";
import { RemoveUserUseCase } from "@/domain/usecases/user/remove-user.usecase";
import { ModifyUserUseCase } from "@/domain/usecases/user/modify-user.usecase";
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
import { ModifyUserRequestDTO } from "../dtos/user/modify-user.request.dto";
import { HttpExceptionFilter } from "../filters/http-exception.filter";
import { AddUserRequestDTO } from "../dtos/user/add-user.request.dto";
import { AddUserResponseDTO } from "../dtos/user/add-user.response.dto";
import { ModifyUserResponseDTO } from "../dtos/user/modify-user.response.dto";
import { FindUserResponseDTO } from "../dtos/user/find-user.response.dto";
import { FindUserUseCase } from "@/domain/usecases/user/find-user.usecase";
import { FindUserRequestDTO } from "../dtos/user/find-user.request.dto";

@Controller('user')
@UseFilters(new HttpExceptionFilter())
export class UserController {

    constructor(
        private readonly findUserUseCase: FindUserUseCase,
        private readonly addUserUseCase: AddUserUseCase,
        private readonly modifyUserUseCase: ModifyUserUseCase,
        private readonly removeUserUseCase: RemoveUserUseCase
    ) { }

    @Get()
    @UsePipes(new ValidationPipe({ transform: true }))
    async find(
        @Query() params: FindUserRequestDTO
    ): Promise<FindUserResponseDTO[]> {
        return this.findUserUseCase.execute(params)
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async add(@Body() params: AddUserRequestDTO
    ): Promise<AddUserResponseDTO> {
        return await this.addUserUseCase.execute(params)
    }

    @Patch()
    @UsePipes(new ValidationPipe({ transform: true }))
    async modify(
        @Query('id') id: string,
        @Body() params: ModifyUserRequestDTO
    ): Promise<ModifyUserResponseDTO> {
        if (!id) {
            throw new BadRequestException("Query 'id' not found")
        }
        return await this.modifyUserUseCase.execute(id, { ...params })
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
        await this.removeUserUseCase.execute({ id })
    }

}

