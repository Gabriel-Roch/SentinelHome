import { ContactEntity } from "@/domain/entities/contact.entity";
import { IContactRepository } from "@/domain/repositories/abstract-contact.repository";
import { ContactParams } from "@/domain/shared/contact/_contact.params";
import { Repository } from "typeorm";
import { Contact } from "./mysql/entities/contact.entity";
import { InjectRepository } from "@nestjs/typeorm";

export class ContactRepository implements IContactRepository<ContactEntity, ContactParams> {
    constructor(
        @InjectRepository(Contact)
        private contactRepository: Repository<Contact>
    ) { }

    async add(params: ContactParams): Promise<ContactEntity> {
        const newContact = this.contactRepository.create(params)
        return await this.contactRepository.save(newContact)
    }

    async findAll(params?: Partial<ContactParams> | undefined): Promise<ContactEntity[]> {
        return await this.contactRepository.find({
            where: params
        })
    }

    async find(params: Partial<ContactParams>): Promise<ContactEntity | null> {
        return await this.contactRepository.findOne({
            where: params
        })
    }

    async modify(id: string, params: Partial<ContactParams>): Promise<void> {
        await this.contactRepository.update(id, params)
    }

    async remove(id: string): Promise<void> {
        await this.contactRepository.delete(id)
    }

    async existsBy(params: Partial<ContactParams>): Promise<boolean> {
        return await this.contactRepository.existsBy(params)
    }
}