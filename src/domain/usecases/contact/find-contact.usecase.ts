import { ContactEntity } from "@/domain/entities/contact.entity";
import { IContactRepository } from "@/domain/repositories/abstract-contact.repository";
import { ContactParams } from "@/domain/shared/contact/_contact.params";
import { FindContactParams } from "@/domain/shared/contact/find-contact.params";
import { Injectable } from "@nestjs/common";

@Injectable()
export class FindContactUseCase {

    constructor(
        private contactRepository: IContactRepository<
            ContactEntity,
            ContactParams
        >
    ) { }

    async execute(params?: Partial<FindContactParams>): Promise<ContactEntity[]> {
        console.log(params)
        console.log("chegou aqui")
        return await this.contactRepository.findAll(params)
    }

}