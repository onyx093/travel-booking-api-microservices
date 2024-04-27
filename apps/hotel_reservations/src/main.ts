import { NestFactory } from '@nestjs/core';
import { HotelReservationsModule } from './hotel_reservations.module';
import { RmqService } from '@app/common/rmq/rmq.service';

async function bootstrap() {
  const app = await NestFactory.create(HotelReservationsModule);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions('HOTEL_RESERVATIONS'));
  await app.startAllMicroservices();
}
bootstrap();
