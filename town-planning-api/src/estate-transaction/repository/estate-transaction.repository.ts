import { EstateTransactionQueryDto } from '../dto/estate-transaction.query.dto ';
import { EstateTransactionResponseDto } from '../dto/estate-transaction.response.dto';

export interface EstateTransactionRepository {
    getEstateInfo(estateDto: EstateTransactionQueryDto): Promise<EstateTransactionResponseDto>;
}