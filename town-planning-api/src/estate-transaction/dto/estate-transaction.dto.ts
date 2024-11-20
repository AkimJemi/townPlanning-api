import { Type } from 'class-transformer';
import { IsIn, IsInt, IsNotEmpty, IsOptional, Max, Min } from 'class-validator';

export class EstateTransactionDto {

  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  @Min(2015)
  @Max(2018)
  year: number;

  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  @Min(8)
  @Max(14)
  prefCode: number;

  @IsOptional()
  cityCode: number;

  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  @IsIn([1, 2])
  displayType: number;
}
export class EstateTransactionResponseDto {
  prefectureCode: string;

  prefectureName: string;

  type: string;

  years: { year: number; value: number }[];
}