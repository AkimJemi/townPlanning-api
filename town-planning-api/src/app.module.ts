import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstateTransactionModule } from './estate-transaction/module/estate-transaction.module';
import { EstateTransactionController } from './estate-transaction/controller/estate-transaction.controller';
import { EstateTransactionService } from './estate-transaction/service/estate-transaction.service';
import { EstateTransactionRepository } from './estate-transaction/repository/estate-transaction.repository';

@Module({
  imports: [EstateTransactionModule],
  controllers: [AppController, EstateTransactionController],
  providers: [
    AppService,
    EstateTransactionService,
    EstateTransactionRepository,
  ],
})
export class AppModule {}
