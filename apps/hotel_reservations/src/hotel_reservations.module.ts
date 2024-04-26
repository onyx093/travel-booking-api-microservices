import { Module } from '@nestjs/common';
import { HotelReservationsController } from './hotel_reservations.controller';
import { HotelReservationsService } from './hotel_reservations.service';

@Module({
  imports: [],
  controllers: [HotelReservationsController],
  providers: [HotelReservationsService],
})
export class HotelReservationsModule {}
