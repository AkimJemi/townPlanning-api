import { EstateTransactionFindResponseDto, EstateTransactionResponseDto, } from '../dto/estate-transaction.response.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EstateTransactionEntity } from '../entities/estate-transaction-entity';
import { EstateTransactionQueryDto, EstateTransactionFindQueryDto } from '../dto/estate-transaction.query.dto ';
import { EstateTransactionRepository } from '../repository/estate-transaction.repository';
import { addQuotes } from '../../common/common-function'

@Injectable()
export class EstateTransactionInfrastructure implements EstateTransactionRepository {

    constructor(
        @InjectRepository(EstateTransactionEntity)
        private readonly estateTransactionRepository: Repository<EstateTransactionEntity>,
    ) { }

    async findAllByInputInfo(estateDto: EstateTransactionFindQueryDto): Promise<EstateTransactionFindResponseDto[]> {
        const query: string[] = [];
        if (estateDto.year) {
            query.push("year = " + addQuotes(estateDto.year))
        }
        if (estateDto.prefectureCode) {
            query.push("prefecture_code = " + addQuotes(estateDto.prefectureCode))
        }
        if (estateDto.type) {
            query.push("type = " + addQuotes(estateDto.type))
        }
        const query_result: string = query.length > 0 ? "WHERE " + query.join(" AND ") : "";
        const results: EstateTransactionEntity[] = await this.estateTransactionRepository.query(
            `SELECT * FROM town_planning_api_schema.estate_transaction ${query_result}`
        );
        return results.map((result) => ({
            prefectureCode: result.prefecture_code,
            prefectureName: result.prefecture_name,
            type: result.type,
            year: result.year,
            value: result.value,
        }));
    }


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
