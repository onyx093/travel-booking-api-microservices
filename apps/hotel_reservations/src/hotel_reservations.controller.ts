import { Controller, Get } from '@nestjs/common';
import { HotelReservationsService } from './hotel_reservations.service';

@Controller()
export class HotelReservationsController {
  constructor(private readonly hotelReservationsService: HotelReservationsService) {}

  @Get()
  getHello(): string {
    return this.hotelReservationsService.getHello();
  }
}
