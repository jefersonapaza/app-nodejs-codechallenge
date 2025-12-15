import { TransactionRepository } from '../repositories/transaction.repository';
import { Transaction } from '../entities/transaction.entity';
import { randomUUID } from 'crypto';

export class CreateTransactionUseCase {
  constructor(
    private readonly repository: TransactionRepository
  ) {}

  async execute(amount: number): Promise<void> {
    const transaction = new Transaction(
      randomUUID(),
      amount,
      new Date()
    );

    await this.repository.save(transaction);
  }
}