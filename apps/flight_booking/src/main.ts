import { NestFactory } from '@nestjs/core';
import { FlightBookingModule } from './flight_booking.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(FlightBookingModule);
  app.useGlobalPipes(new ValidationPipe());
  const configService = new ConfigService();
  await app.listen(configService.get('PORT'));
}
bootstrap();
