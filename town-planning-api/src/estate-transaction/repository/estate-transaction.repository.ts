import { EstateTransactionDto, EstateTransactionResponseDto, } from '../dto/estate-transaction.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EstateTransactionEntity } from '../entities/estate-transaction-entity';

@Injectable()
export class EstateTransactionRepository {

    constructor(
        @InjectRepository(EstateTransactionEntity)
        private readonly estateTransactionRepository: Repository<EstateTransactionEntity>,
    ) { }

    async getEstateInfo(estateDto: EstateTransactionDto): Promise<EstateTransactionResponseDto> {
        const results: EstateTransactionEntity[] = await this.estateTransactionRepository.query(
            'SELECT * FROM town_planning_api_schema.estate_transaction WHERE prefecture_code = $1 AND year = $2 AND type = $3',
            [estateDto.prefCode, estateDto.year, estateDto.displayType],
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
