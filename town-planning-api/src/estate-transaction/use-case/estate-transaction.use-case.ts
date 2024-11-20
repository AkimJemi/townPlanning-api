import { Injectable } from '@nestjs/common';
import { EstateTransactionInfrastructure } from '../infrastructure/estate-transaction.infrastructure';
import { EstateTransactionResponseDto } from '../dto/estate-transaction.response.dto';
import { EstateTransactionQueryDto } from '../dto/estate-transaction.query.dto ';

@Injectable()
export class EstateTransactionUseCase {
    constructor(
        private estateTransactionRepository: EstateTransactionInfrastructure,
    ) { }
    async getEstateInfo(estateDto: EstateTransactionQueryDto): Promise<EstateTransactionResponseDto> {
        return await this.estateTransactionRepository.getEstateInfo(estateDto);
    }
}
