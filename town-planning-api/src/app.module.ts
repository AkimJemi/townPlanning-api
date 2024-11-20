import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstateTransactionModule } from './estate-transaction/module/estate-transaction.module';
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
    })
  ]
})
export class AppModule { }
