import { Controller, UseGuards } from '@nestjs/common';
import { HotelReservationsService } from './hotel_reservations.service';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { JwtAuthGuard, RmqService } from '@app/common';

@Controller()
export class HotelReservationsController {
  constructor(
    private readonly hotelReservationsService: HotelReservationsService,
    private readonly rmqService: RmqService,
  ) {}

  @EventPattern('flight_booking_created')
  @UseGuards(JwtAuthGuard)
  async handleFlightBookingCreated(
    @Payload() data: any,
    @Ctx() context: RmqContext,
  ) {
    this.hotelReservationsService.reserve(data);
    this.rmqService.ack(context);
  }
}
