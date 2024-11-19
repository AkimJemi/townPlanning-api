import { Test, TestingModule } from '@nestjs/testing';
import { EstateTransactionController } from './estate-transaction.controller';

describe('EstateTransactionController', () => {
  let controller: EstateTransactionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstateTransactionController],
    }).compile();

    controller = module.get<EstateTransactionController>(EstateTransactionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
