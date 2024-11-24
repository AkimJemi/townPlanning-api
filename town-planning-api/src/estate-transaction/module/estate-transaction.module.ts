import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstateTransactionEntity } from '../entities/estate-transaction-entity';
import { EstateTransactionController } from '../controller/estate-transaction.controller';
import { EstateTransactionUseCase } from '../use-case/estate-transaction.use-case';
import { EstateTransactionInfrastructure } from '../infrastructure/estate-transaction.infrastructure';
import { ESTATE_TRANSACTION_REPOSITORY } from '../repository/estate-transaction.repository';
@Module({
    imports: [TypeOrmModule.forFeature([EstateTransactionEntity])],
    controllers: [EstateTransactionController],
    providers: [
        EstateTransactionUseCase,
        {
            provide: ESTATE_TRANSACTION_REPOSITORY,
            useClass: EstateTransactionInfrastructure
        }
    ]
})
export class EstateTransactionModule { }
