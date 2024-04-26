import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { FlightBooking } from './schemas/flight_booking.schema';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';

Injectable();
export class FlightBookingsRepository extends AbstractRepository<FlightBooking> {
  protected readonly logger = new Logger(FlightBookingsRepository.name);

  constructor(
    @InjectModel(FlightBooking.name) flightBookingModel: Model<FlightBooking>,
    @InjectConnection() connection: Connection,
  ) {
    super(flightBookingModel, connection);
  }
}
