import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('estate_transaction')
export class EstateTransactionEntity {

    @PrimaryColumn({ name: 'prefecture_code', type: 'text' })
    prefectureCode: string;

    @PrimaryColumn({ name: 'prefecture_name', type: 'text' })
    prefectureName: string;

    @PrimaryColumn({ name: 'number', type: 'int' })
    type: number;

    @Column({ name: 'year', type: 'int' })
    year: number;

    @Column({ name: 'value', type: 'int' })
    value: number;
}