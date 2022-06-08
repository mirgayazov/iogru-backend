import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors({
    origin: process.env.CLIENT_URL,
    methods: 'GET,PUT,POST,DELETE',
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 5000);
}

bootstrap();
