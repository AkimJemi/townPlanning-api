import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstateTransactionEntity } from '../entities/estate-transaction-entity';
import { EstateTransactionController } from '../controller/estate-transaction.controller';
import { EstateTransactionUseCase } from '../use-case/estate-transaction.use-case';
import { EstateTransactionInfrastructure } from '../infrastructure/estate-transaction.infrastructure';
@Module({
    imports: [TypeOrmModule.forFeature([EstateTransactionEntity])],
    controllers: [EstateTransactionController],
    providers: [
        EstateTransactionUseCase,
        {
            provide: EstateTransactionInfrastructure,
            useClass: EstateTransactionInfrastructure
        }
    ]
})
export class EstateTransactionModule { }
