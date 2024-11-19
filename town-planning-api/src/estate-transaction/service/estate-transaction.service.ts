import { Injectable } from '@nestjs/common';
import { EstateTransactionRepository } from '../repository/estate-transaction.repository';
import { EstateTransactionDto } from '../dto/estate-transaction.dto';

@Injectable()
export class EstateTransactionService {
  constructor(
    private estateTransactionRepository: EstateTransactionRepository,
  ) {}
  getEstateInfo(estateDto: EstateTransactionDto) {
    return this.estateTransactionRepository.getEstateInfo(estateDto);
  }
}
