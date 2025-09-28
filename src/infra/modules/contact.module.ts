import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Contact } from "../repositories/mysql/entities/contact.entity";
import { IContactRepository } from "@/domain/repositories/abstract-contact.repository";
import { ContactRepository } from "../repositories/contact.repository";
import { ContactController } from "@/presentation/controllers/contact.controller";
import { AddContactUseCase } from "@/domain/usecases/contact/add-contact.usecase";
import { FindContactUseCase } from "@/domain/usecases/contact/find-contact.usecase";
import { ModifyContactUseCase } from "@/domain/usecases/contact/modify-contact.usecase";
import { RemoveContactUseCase } from "@/domain/usecases/contact/remove-contact.usecase";
import { IHomeRepository } from "@/domain/repositories/abstract-home.repository";
import { HomeRepository } from "../repositories/home.repository";
import { Home } from "../repositories/mysql/entities/home.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Contact,
      Home
    ])
  ],
  controllers: [ContactController],
  providers: [
    {
      provide: IContactRepository,
      useClass: ContactRepository,
    },
    {
      provide: IHomeRepository,
      useClass: HomeRepository
    },
    FindContactUseCase,
    AddContactUseCase,
    ModifyContactUseCase,
    RemoveContactUseCase
  ],
  exports: [TypeOrmModule]
})

export class ContactModule { }