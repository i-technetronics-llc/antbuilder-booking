import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, VersioningType } from '@nestjs/common';
import * as basicAuth from "express-basic-auth";
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {

  const httpPort = AppModule.port;
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(`${AppModule.apiPrefix}`);
  app.enableVersioning({
    type: VersioningType.URI,
    prefix: AppModule.apiVersionPrefix
  });
  app.enableCors({
    origin: '*',
  });
  //app.useLogger(app.get(Logger));
  //app.useGlobalInterceptors(new LoggerErrorInterceptor());
  
  app.use(`${AppModule.apiPrefix}/${AppModule.apiPrefixExt}`, 
    basicAuth({
      challenge: true,
      users: {
        dev: AppModule.swaggerAuthPassword,
      }
    })
  );

  const options = new DocumentBuilder()
    .setTitle('Antbuilder - Booking API Service')
    .setDescription('Booking API service to handle client booking information such as organization, personal and project information with integration with calendly.')
    .setVersion('1.0')
    .addBearerAuth({
      in: 'header',
      type: 'apiKey',
      scheme: 'bearer',
      bearerFormat: 'jwt',
    })
    // .addGlobalParameters({
    //   name: 'apiPubKey',
    //   in: 'header'
    // })
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(`${AppModule.apiPrefix}/${AppModule.apiPrefixExt}`, app, document, {
    customSiteTitle: 'Antbuilder Bookings'
  });

  await app.listen(AppModule.port).then(async () => console.log(`Application is running on: ${await app.getUrl()}${AppModule.apiPrefix}/${AppModule.apiPrefixExt}`));
}

bootstrap();
