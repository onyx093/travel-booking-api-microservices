import { Body, Controller, Post } from '@nestjs/common';
import { FlightBookingService } from './flight_booking.service';

@Controller()
export class FlightBookingController {
  constructor(private readonly flightBookingService: FlightBookingService) {}

  @Post()
  async createFlight(@Body() request: CreateFlightRequest): Promise<void> {
    return this.flightBookingService.createFlight(request);
  }
}
