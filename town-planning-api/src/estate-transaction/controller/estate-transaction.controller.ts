import { Body, Controller, Get } from '@nestjs/common';
import { EstateTransactionService } from '../service/estate-transaction.service';
import { EstateTransactionDto } from '../dto/estate-transaction.dto';

@Controller('estate-transaction')
export class EstateTransactionController {
  constructor(
    private readonly estateTransactionService: EstateTransactionService,
  ) {}

  @Get('bar')
  find(@Body() body: EstateTransactionDto) {
    return this.estateTransactionService.getEstateInfo(body);
  }
}
