import { EstateTransactionFindQueryDto, EstateTransactionQueryDto } from '../dto/estate-transaction.query.dto ';
import { EstateTransactionFindResponseDto, EstateTransactionResponseDto } from '../dto/estate-transaction.response.dto';

export interface EstateTransactionRepository {
    getEstateInfo(estateDto: EstateTransactionQueryDto): Promise<EstateTransactionResponseDto>;

    findAllByInputInfo(estateDto: EstateTransactionFindQueryDto): Promise<EstateTransactionFindResponseDto[]>
}
export const ESTATE_TRANSACTION_REPOSITORY = Symbol('EstateTransactionRepository');