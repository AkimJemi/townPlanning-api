import { Controller, Get, Query } from '@nestjs/common';
import { EstateTransactionService } from '../service/estate-transaction.service';
import { EstateTransactionDto, EstateTransactionResponseDto } from '../dto/estate-transaction.dto';

@Controller('estateTransaction')
export class EstateTransactionController {
    constructor(
        private readonly estateTransactionService: EstateTransactionService,
    ) { }

    @Get('bar')
    async find(@Query() dto: EstateTransactionDto): Promise<EstateTransactionResponseDto> {
        return await this.estateTransactionService.getEstateInfo(dto);
    }
}
