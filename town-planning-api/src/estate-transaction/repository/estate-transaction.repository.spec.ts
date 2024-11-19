import { EstateTransactionRepository } from './estate-transaction.repository';

describe('EstateTransactionRepository', () => {
  it('should be defined', () => {
    expect(new EstateTransactionRepository()).toBeDefined();
  });
});
