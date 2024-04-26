import { AbstractDocument } from '@app/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ versionKey: false })
export class FlightBooking extends AbstractDocument {
  @Prop()
  name: string;
}

export const FlightBookingSchema = SchemaFactory.createForClass(FlightBooking);
