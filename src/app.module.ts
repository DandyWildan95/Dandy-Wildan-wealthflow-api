import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from '../test/ormconfig.test';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    process.env.NODE_ENV === 'test'
      ? TypeOrmModule.forRoot(ormconfig)
      : TypeOrmModule.forRoot({
          type: 'postgres',
          host: process.env.DATABASE_HOST,
          port: parseInt(process.env.DATABASE_PORT ?? '5432'),
          username: process.env.DATABASE_USER,
          password: process.env.DATABASE_PASS,
          database: process.env.DATABASE_NAME,
          autoLoadEntities: true,
          synchronize: true,
        }),
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}

