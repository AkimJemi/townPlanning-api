import { Controller, Get, Query } from '@nestjs/common';
import { EstateTransactionUseCase } from '../use-case/estate-transaction.use-case';
import { EstateTransactionResponseDto } from '../dto/estate-transaction.response.dto';
import { EstateTransactionQueryDto } from '../dto/estate-transaction.query.dto ';

@Controller('estateTransaction')
export class EstateTransactionController {
    constructor(
        private readonly estateTransactionService: EstateTransactionUseCase,
    ) { }

    @Get('bar')
    async find(@Query() estateDto: EstateTransactionQueryDto): Promise<EstateTransactionResponseDto> {
        return await this.estateTransactionService.getEstateInfo(estateDto);
    }
}
