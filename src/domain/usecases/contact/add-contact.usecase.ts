import { ContactEntity } from "@/domain/entities/contact.entity";
import { HomeEntity } from "@/domain/entities/home.entity";
import { IContactRepository } from "@/domain/repositories/abstract-contact.repository";
import { IHomeRepository } from "@/domain/repositories/abstract-home.repository";
import { ContactParams } from "@/domain/shared/contact/_contact.params";
import { AddContactParams } from "@/domain/shared/contact/add-contact.params";
import { HomeParams } from "@/domain/shared/home/_home.params";
import { BadRequestException, Injectable } from "@nestjs/common";
import { randomUUID } from "crypto";

@Injectable()
export class AddContactUseCase {
    constructor(
        private readonly contactRepository: IContactRepository<
            ContactEntity,
            ContactParams
        >,
        private readonly homeRepository: IHomeRepository<
            HomeEntity,
            HomeParams
        >
    ) { }

    async execute(params: AddContactParams): Promise<ContactEntity> {

        const existsHome = await this.homeRepository.existsBy({
            id: params.homeID
        })

        if (existsHome === false) {
            throw new BadRequestException("home not found!")
        }

        const newContact = new ContactEntity({
            id: randomUUID(),
            homeID: params.homeID,
            name: params.name,
            tell: params.tell,
            isActive: true,
            dt_create: new Date()
        })

        return await this.contactRepository.add(newContact)
    }
}