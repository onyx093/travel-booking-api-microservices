import { Injectable } from '@nestjs/common';
import { CreateFlightRequest } from './dto/create-order.request';
import { FlightBookingsRepository } from './flight_booking.repository';

@Injectable()
export class FlightBookingService {
  constructor(private readonly flightRepository: FlightBookingsRepository) {}

  async createFlight(request: CreateFlightRequest) {
    return this.flightRepository.create(request);
  }

  async getFlights() {
    return this.flightRepository.find({});
  }
}
