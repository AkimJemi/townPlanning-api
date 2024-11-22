export class EstateTransactionResponseDto {
  prefectureCode: string;

  prefectureName: string;

  type: string;

  years: { year: number; value: number }[];
}

export class EstateTransactionFindResponseDto {
  prefectureCode: string;

  prefectureName: string;

  type: string;

  year: number;

  value: number;
}