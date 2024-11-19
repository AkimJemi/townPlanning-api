import { Test, TestingModule } from '@nestjs/testing';
import { EstateTransactionService } from './estate-transaction.service';

describe('EstateTransactionService', () => {
  let service: EstateTransactionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstateTransactionService],
    }).compile();

    service = module.get<EstateTransactionService>(EstateTransactionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
