import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingModule } from './booking/booking.module';
//import { ConfigService } from '@config/config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BlogModule } from './blog/blog.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingsEntity } from '@booking/entities/booking.entity';
import { Console } from 'console';
import { ApplicationsEntity } from '@booking/entities/application.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    BookingModule,
    //BlogModule,
    TypeOrmModule.forFeature([
     BookingsEntity,
     ApplicationsEntity
    ]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false
        }
      }
      //logging: 'all',
    }),
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService, 
    ConfigService
  ],
})
export class AppModule {
  public static port: number;
  public static apiVersion: string;
  public static apiPrefix: string;
  public static apiPrefixExt: string;
  public static apiVersionPrefix: string;
  public static swaggerAuthPassword: string;
  public static sslCertKeyPath: string;
  public static sslCertChainPath: string;

  constructor(private readonly configService: ConfigService) {
    AppModule.port = this.configService.get('HTTP_PORT');
    AppModule.apiVersion = this.configService.get('API_VERSION');
    AppModule.apiPrefix = this.configService.get('API_PREFIX');
    AppModule.apiPrefixExt = this.configService.get('API_PREFIX_EXT');
    AppModule.apiVersionPrefix = this.configService.get('API_VERSION_PREFIX');
    AppModule.swaggerAuthPassword = this.configService.get('SWAGGER_AUTH_PASSWORD');
    AppModule.sslCertKeyPath = this.configService.get('SSL_CERT_KEY_PATH');
    AppModule.sslCertChainPath = this.configService.get('SSL_CERT_CHAIN_PATH');
  }
}