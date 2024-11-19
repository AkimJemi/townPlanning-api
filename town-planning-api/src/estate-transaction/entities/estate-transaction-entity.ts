import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('estate_transaction')
export class EstateTransactionEntity {

    @PrimaryColumn({ type: 'text' })
    prefecture_code: string;

    @PrimaryColumn({ type: 'text' })
    prefecture_name: string;

    @PrimaryColumn({ type: 'text' })
    type: string;

    @Column({ type: 'int' })
    year: number;

    @Column({ type: 'int' })
    value: number;
}
