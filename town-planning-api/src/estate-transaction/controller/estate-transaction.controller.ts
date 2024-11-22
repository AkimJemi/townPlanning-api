import { Controller, Get, Query } from '@nestjs/common';
import { EstateTransactionUseCase } from '../use-case/estate-transaction.use-case';
import { EstateTransactionFindResponseDto, EstateTransactionResponseDto } from '../dto/estate-transaction.response.dto';
import { EstateTransactionQueryDto, EstateTransactionFindQueryDto } from '../dto/estate-transaction.query.dto ';

@Controller('estateTransaction/bar')
export class EstateTransactionController {
    constructor(
        private readonly estateTransactionUseCase: EstateTransactionUseCase,
    ) { }

    @Get('')
    async find(@Query() estateDto: EstateTransactionQueryDto): Promise<EstateTransactionResponseDto> {
        return await this.estateTransactionUseCase.getEstateInfo(estateDto);
    }

    @Get('select')
    async findAllByInputInfo(@Query() estateDto: EstateTransactionFindQueryDto): Promise<EstateTransactionFindResponseDto[]> {
        return await this.estateTransactionUseCase.findAllByInputInfo(estateDto);
    }
}
