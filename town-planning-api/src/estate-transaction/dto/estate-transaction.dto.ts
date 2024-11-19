import { Expose } from 'class-transformer';

export class EstateTransactionDto {
  year: number;

  prefCode: number;

  cityCode: number;

  displayType: number;
}
export class EstateTransactionResponseDto {
  @Expose()
  prefectureCode: string;

  @Expose()
  prefectureName: string;

  @Expose()
  type: string;

  @Expose()
  years: { year: number; value: number }[];
}