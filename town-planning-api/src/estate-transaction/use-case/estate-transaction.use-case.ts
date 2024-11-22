import { Injectable } from '@nestjs/common';
import { EstateTransactionInfrastructure } from '../infrastructure/estate-transaction.infrastructure';
import { EstateTransactionFindResponseDto, EstateTransactionResponseDto } from '../dto/estate-transaction.response.dto';
import { EstateTransactionQueryDto, EstateTransactionFindQueryDto } from '../dto/estate-transaction.query.dto ';

@Injectable()
export class EstateTransactionUseCase {
    constructor(
        private estateTransactionInfrastructure: EstateTransactionInfrastructure,
    ) { }

    async getEstateInfo(estateDto: EstateTransactionQueryDto): Promise<EstateTransactionResponseDto> {
        return await this.estateTransactionInfrastructure.getEstateInfo(estateDto);
    }

    async findAllByInputInfo(estateDto: EstateTransactionFindQueryDto): Promise<EstateTransactionFindResponseDto[]> {
        return await this.estateTransactionInfrastructure.findAllByInputInfo(estateDto);
    }
}
