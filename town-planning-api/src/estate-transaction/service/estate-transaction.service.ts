import { Injectable } from '@nestjs/common';
import { EstateTransactionRepository } from '../repository/estate-transaction.repository';

@Injectable()
export class EstateTransactionService {
    constructor(private estateTransactionRepository: EstateTransactionRepository) { }
    getEstateInfo(estateDto: Body) {
        return this.estateTransactionRepository.getEstateInfo(estateDto);
    }
}
