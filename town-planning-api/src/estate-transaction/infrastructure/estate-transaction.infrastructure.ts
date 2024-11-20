import { EstateTransactionResponseDto, } from '../dto/estate-transaction.response.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EstateTransactionEntity } from '../entities/estate-transaction-entity';
import { EstateTransactionQueryDto } from '../dto/estate-transaction.query.dto ';

@Injectable()
export class EstateTransactionInfrastructure {

    constructor(
        @InjectRepository(EstateTransactionEntity)
        private readonly estateTransactionRepository: Repository<EstateTransactionEntity>,
    ) { }

    async getEstateInfo(estateDto: EstateTransactionQueryDto): Promise<EstateTransactionResponseDto> {
        const results: EstateTransactionEntity[] = await this.estateTransactionRepository.query(
            'SELECT * FROM town_planning_api_schema.estate_transaction WHERE prefecture_code = $1 AND year = $2 AND type = $3',
            [estateDto.prefectureCode, estateDto.year, estateDto.type],
        );

        return {
            prefectureCode: results[0].prefecture_code,
            prefectureName: results[0].prefecture_name,
            type: results[0].type,
            years: results.map((result) => ({
                year: result.year,
                value: result.value,
            }))
        };
    }
}
