export class EstateTransactionResponseDto {
  prefectureCode: string;

  prefectureName: string;

  type: string;

  years: { year: number; value: number }[];
}