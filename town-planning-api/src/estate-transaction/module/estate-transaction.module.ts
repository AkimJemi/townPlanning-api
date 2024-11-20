import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstateTransactionEntity } from '../entities/estate-transaction-entity';
import { EstateTransactionController } from '../controller/estate-transaction.controller';
import { EstateTransactionService } from '../service/estate-transaction.service';
import { EstateTransactionRepository } from '../repository/estate-transaction.repository';
@Module({
    imports: [TypeOrmModule.forFeature([EstateTransactionEntity])],
    controllers: [EstateTransactionController],
    providers: [
        EstateTransactionService,
        EstateTransactionRepository
    ]
})
export class EstateTransactionModule { }
