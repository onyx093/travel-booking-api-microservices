import { NestFactory } from '@nestjs/core';
import { FlightBookingModule } from './flight_booking.module';

async function bootstrap() {
  const app = await NestFactory.create(FlightBookingModule);
  await app.listen(3000);
}
bootstrap();
