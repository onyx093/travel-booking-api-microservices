import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { FlightBookingService } from './flight_booking.service';
import { CreateFlightRequest } from './dto/create-order.request';
import { FlightBooking } from './schemas/flight_booking.schema';
import { JwtAuthGuard } from '@app/common';

@Controller('flights')
export class FlightBookingController {
  constructor(private readonly flightBookingService: FlightBookingService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async createFlight(
    @Body() request: CreateFlightRequest,
    @Req() req: any,
  ): Promise<FlightBooking> {
    console.log(req.user);

    return this.flightBookingService.createFlight(
      request,
      req.cookies?.Authentication,
    );
  }

  @Get()
  async getFlights(): Promise<FlightBooking[]> {
    return this.flightBookingService.getFlights();
  }
}
