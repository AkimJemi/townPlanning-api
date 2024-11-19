import { Body, Controller, Get } from '@nestjs/common';
import { EstateTransactionService } from '../service/estate-transaction.service';

@Controller('estate-transaction')
export class EstateTransactionController {
    constructor(private readonly estateTransactionService: EstateTransactionService) { }

    @Get('bar')
    find(@Body() body: any) {
        return this.estateTransactionService.getEstateInfo(body);
    }
}
