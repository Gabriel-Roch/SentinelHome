import { ContactEntity } from "@/domain/entities/contact.entity";
import { IContactRepository } from "@/domain/repositories/abstract-contact.repository";
import { ContactParams } from "@/domain/shared/contact/_contact.params";
import { RemoveContactParams } from "@/domain/shared/contact/remove-contact.params";
import { Injectable } from "@nestjs/common";

@Injectable()
export class RemoveContactUseCase {
    constructor(
        private contactRepository: IContactRepository<
            ContactEntity,
            ContactParams
        >
    ) { }

    async execute(params: RemoveContactParams): Promise<void> {
        await this.contactRepository.remove(params.id)
    }
}