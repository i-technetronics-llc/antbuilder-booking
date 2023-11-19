import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingModule } from './booking/booking.module';
//import { ConfigService } from '@config/config.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BlogModule } from './blog/blog.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingEntity } from '@booking/entities/booking.entity';
import { Console } from 'console';
import { ApplicationEntity } from '@booking/entities/application.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    BookingModule,
    BlogModule,
    TypeOrmModule.forFeature([
     BookingEntity,
     ApplicationEntity
    ]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'antbuilder-booking',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: 'all',
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

  constructor(private readonly configService: ConfigService) {
    AppModule.port = this.configService.get('HTTP_PORT');
    AppModule.apiVersion = this.configService.get('API_VERSION');
    AppModule.apiPrefix = this.configService.get('API_PREFIX');
    AppModule.apiPrefixExt = this.configService.get('API_PREFIX_EXT');
    AppModule.apiVersionPrefix = this.configService.get('API_VERSION_PREFIX');
    AppModule.swaggerAuthPassword = this.configService.get('SWAGGER_AUTH_PASSWORD');
  }
}