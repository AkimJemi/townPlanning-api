export class EstateTransactionDto {
  year: number;

  prefCode: number;

  cityCode: number;

  displayType: number;
}
export class EstateTransactionResponseDto {
  prefectureCode: string;

  prefectureName: string;

  type: string;

  years: { year: number; value: number }[];
}