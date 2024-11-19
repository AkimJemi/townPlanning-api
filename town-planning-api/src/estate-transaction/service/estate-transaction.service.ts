import { Injectable } from '@nestjs/common';
import { EstateTransactionRepository } from '../repository/estate-transaction.repository';
import { EstateTransactionDto, EstateTransactionResponseDto } from '../dto/estate-transaction.dto';

@Injectable()
export class EstateTransactionService {
    constructor(
        private estateTransactionRepository: EstateTransactionRepository,
    ) { }
    async getEstateInfo(estateDto: EstateTransactionDto): Promise<EstateTransactionResponseDto> {
        return await this.estateTransactionRepository.getEstateInfo(estateDto);
    }
}
