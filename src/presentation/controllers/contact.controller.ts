import { AddContactUseCase } from "@/domain/usecases/contact/add-contact.usecase";
import { FindContactUseCase } from "@/domain/usecases/contact/find-contact.usecase";
import { ModifyContactUseCase } from "@/domain/usecases/contact/modify-contact.usecase";
import { RemoveContactUseCase } from "@/domain/usecases/contact/remove-contact.usecase";
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
import { ModifyContactRequestDTO } from "../dtos/contact/modify-contact.request.dto";
import { ModifyContactResponseDTO } from "../dtos/contact/modify-contact.response.dto";
import { AddContactResponseDTO } from "../dtos/contact/add-contact.response.dto";
import { AddContactRequestDTO } from "../dtos/contact/add-contact.request.dto";
import { FindContactResponseDTO } from "../dtos/contact/find-contact.response.dto";
import { FindContactRequestDTO } from "../dtos/contact/find-contact.request.dto";
import { HttpExceptionFilter } from "../filters/http-exception.filter";


@Controller('contact')
@UseFilters(new HttpExceptionFilter())
export class ContactController {

    constructor(
        private readonly addContactUseCase: AddContactUseCase,
        private readonly findContactUseCase: FindContactUseCase,
        private readonly modifyContactUseCase: ModifyContactUseCase,
        private readonly removeContactUseCase: RemoveContactUseCase
    ) { }

    @Get()
    @UsePipes(new ValidationPipe({ transform: true }))
    async find(
        @Query() params: FindContactRequestDTO
    ): Promise<FindContactResponseDTO[]> {
        return this.findContactUseCase.execute(params)
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async add(@Body() params: AddContactRequestDTO
    ): Promise<AddContactResponseDTO> {
        return await this.addContactUseCase.execute(params)
    }

    @Patch()
    @UsePipes(new ValidationPipe({ transform: true }))
    async modify(
        @Query('id') id: string,
        @Body() params: ModifyContactRequestDTO
    ): Promise<ModifyContactResponseDTO> {
        if (!id) {
            throw new BadRequestException("Query 'id' not found")
        }
        return await this.modifyContactUseCase.execute(id, { ...params })
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
        await this.removeContactUseCase.execute({ id })
    }

}