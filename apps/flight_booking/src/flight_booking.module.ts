import { Module } from '@nestjs/common';
import { FlightBookingController } from './flight_booking.controller';
import { FlightBookingService } from './flight_booking.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { DatabaseModule } from '@app/common';
import { FlightBookingsRepository } from './flight_booking.repository';
import { MongooseModule } from '@nestjs/mongoose';
import {
  FlightBooking,
  FlightBookingSchema,
} from './schemas/flight_booking.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
      envFilePath: './apps/flight_booking/.env',
    }),
    DatabaseModule,
    MongooseModule.forFeature([
      {
        name: FlightBooking.name,
        schema: FlightBookingSchema,
      },
    ]),
  ],
  controllers: [FlightBookingController],
  providers: [FlightBookingService, FlightBookingsRepository],
})
export class FlightBookingModule {}
