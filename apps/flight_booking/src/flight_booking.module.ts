import { Module } from '@nestjs/common';
import { FlightBookingController } from './flight_booking.controller';
import { FlightBookingService } from './flight_booking.service';

@Module({
  imports: [],
  controllers: [FlightBookingController],
  providers: [FlightBookingService],
})
export class FlightBookingModule {}
