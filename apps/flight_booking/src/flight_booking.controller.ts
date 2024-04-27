import { Body, Controller, Get, Post } from '@nestjs/common';
import { FlightBookingService } from './flight_booking.service';
import { CreateFlightRequest } from './dto/create-order.request';
import { FlightBooking } from './schemas/flight_booking.schema';

@Controller('flights')
export class FlightBookingController {
  constructor(private readonly flightBookingService: FlightBookingService) {}

  @Post()
  async createFlight(@Body() request: CreateFlightRequest) {
    return this.flightBookingService.createFlight(request);
  }

  @Get()
  async getFlights(): Promise<FlightBooking[]> {
    return this.flightBookingService.getFlights();
  }
}
