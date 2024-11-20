import { Type } from 'class-transformer';
import { IsIn, IsInt, IsNotEmpty, Max, Min } from 'class-validator';

export class EstateTransactionQueryDto {

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
  prefectureCode: number;

  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  @IsIn([1, 2])
  type: number;
}