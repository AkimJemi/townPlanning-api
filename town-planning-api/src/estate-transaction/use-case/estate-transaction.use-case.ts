import { Inject, Injectable } from '@nestjs/common';
import { EstateTransactionFindResponseDto, EstateTransactionResponseDto } from '../dto/estate-transaction.response.dto';
import { EstateTransactionQueryDto, EstateTransactionFindQueryDto } from '../dto/estate-transaction.query.dto ';
import { ESTATE_TRANSACTION_REPOSITORY, EstateTransactionRepository } from '../repository/estate-transaction.repository';

@Injectable()
export class EstateTransactionUseCase {
    constructor(
        @Inject(ESTATE_TRANSACTION_REPOSITORY) private readonly estateTransactionRepository: EstateTransactionRepository,
    ) { }

    async getEstateInfo(estateDto: EstateTransactionQueryDto): Promise<EstateTransactionResponseDto> {
        return await this.estateTransactionRepository.getEstateInfo(estateDto);
    }

    async findAllByInputInfo(estateDto: EstateTransactionFindQueryDto): Promise<EstateTransactionFindResponseDto[]> {
        return await this.estateTransactionRepository.findAllByInputInfo(estateDto);
    }
}
