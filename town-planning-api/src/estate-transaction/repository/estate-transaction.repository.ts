import { Injectable } from '@nestjs/common';
import { EstateTransactionDto } from '../dto/estate-transaction.dto';

@Injectable()
export class EstateTransactionRepository {
  getEstateInfo(estateDto: EstateTransactionDto) {
    return estateDto;
  }
}
