import { Inject, Injectable } from '@nestjs/common';
import { CreateFlightRequest } from './dto/create-order.request';
import { FlightBookingsRepository } from './flight_booking.repository';
import { HOTEL_RESERVATIONS_SERVICE } from './constants/services';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class FlightBookingService {
  constructor(
    private readonly flightRepository: FlightBookingsRepository,
    @Inject(HOTEL_RESERVATIONS_SERVICE)
    private hotelReservationClient: ClientProxy,
  ) {}

  async createFlight(request: CreateFlightRequest, authentication: string) {
    const session = await this.flightRepository.startTransaction();
    try {
      const flightBooking = this.flightRepository.create(request, { session });
      await lastValueFrom(
        this.hotelReservationClient.emit('flight_booking_created', {
          request,
          Authentication: authentication,
        }),
      );
      await session.commitTransaction();
      return flightBooking;
    } catch (error) {
      await session.abortTransaction();
      throw error;
    }
  }

  async getFlights() {
    return this.flightRepository.find({});
  }
}
