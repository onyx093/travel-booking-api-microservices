import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class HotelReservationsService {
  private readonly logger = new Logger(HotelReservationsService.name);

  reserve(data: any) {
    this.logger.log('Making hotel reservation for', data);
  }
}
