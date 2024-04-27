import { Inject, Injectable } from '@nestjs/common';
import { CreateFlightRequest } from './dto/create-order.request';
import { FlightBookingsRepository } from './flight_booking.repository';
import { HOTEL_RESERVATIONS_SERVICE } from './constants/services';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class FlightBookingService {
  constructor(
    private readonly flightRepository: FlightBookingsRepository,
    @Inject(HOTEL_RESERVATIONS_SERVICE)
    private hotelReservationClient: ClientProxy,
  ) {}

  async createFlight(request: CreateFlightRequest) {
    return this.flightRepository.create(request);
  }

  async getFlights() {
    return this.flightRepository.find({});
  }
}
