import { ContactEntity } from "@/domain/entities/contact.entity";
import { IContactRepository } from "@/domain/repositories/abstract-contact.repository";
import { ContactParams } from "@/domain/shared/contact/_contact.params";
import { ModifyContactParams } from "@/domain/shared/contact/modify-contact.params";
import { BadRequestException, Injectable } from "@nestjs/common";

@Injectable()
export class ModifyContactUseCase {

    constructor(
        private contactRepository: IContactRepository<
            ContactEntity,
            ContactParams
        >
    ) { }

    async execute(id: string, params: Partial<ModifyContactParams>): Promise<ContactEntity> {
        await this.contactRepository.modify(id, params)
        const contact = await this.contactRepository.find({
            id: id
        })
        if (contact !== null) {
            return contact
        }
        throw new BadRequestException("contact not found!")
    }

}