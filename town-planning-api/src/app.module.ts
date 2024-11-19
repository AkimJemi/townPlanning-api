import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstateTransactionModule } from './estate-transaction/module/estate-transaction.module';
import { EstateTransactionController } from './estate-transaction/controller/estate-transaction.controller';
import { EstateTransactionService } from './estate-transaction/service/estate-transaction.service';
import { EstateTransactionRepository } from './estate-transaction/repository/estate-transaction.repository';
import { EstateTransactionEntity } from './estate-transaction/entities/estate-transaction-entity';

@Module({
  imports: [EstateTransactionModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DATABASE_HOST'),
        port: configService.get('DATABASE_PORT'),
        username: configService.get('DATABASE_USER'),
        password: configService.get('DATABASE_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        entities: [EstateTransactionEntity],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([EstateTransactionEntity])
  ],
  controllers: [AppController, EstateTransactionController],
  providers: [
    AppService,
    EstateTransactionService,
    EstateTransactionRepository,
  ],
})
export class AppModule { }
