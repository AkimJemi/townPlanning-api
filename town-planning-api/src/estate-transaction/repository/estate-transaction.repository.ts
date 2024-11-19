import { Injectable } from '@nestjs/common';

@Injectable()
export class EstateTransactionRepository {
    getEstateInfo(estateDto: Body) {
        return estateDto;
    }
}
