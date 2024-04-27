import { Module } from '@nestjs/common';
import { HotelReservationsController } from './hotel_reservations.controller';
import { HotelReservationsService } from './hotel_reservations.service';
import { AuthModule, RmqModule } from '@app/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        RABBIT_MQ_URI: Joi.string().required(),
        RABBIT_MQ_HOTEL_RESERVATIONS_QUEUE: Joi.string().required(),
      }),
    }),
    RmqModule,
    AuthModule,
  ],
  controllers: [HotelReservationsController],
  providers: [HotelReservationsService],
})
export class HotelReservationsModule {}
