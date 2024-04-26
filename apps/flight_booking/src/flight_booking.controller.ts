import { Controller, Get } from '@nestjs/common';
import { FlightBookingService } from './flight_booking.service';

@Controller()
export class FlightBookingController {
  constructor(private readonly flightBookingService: FlightBookingService) {}

  @Get()
  getHello(): string {
    return this.flightBookingService.getHello();
  }
}
