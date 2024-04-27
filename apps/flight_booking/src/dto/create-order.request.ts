import { IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class CreateFlightRequest {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  departure: string;

  @IsString()
  @IsNotEmpty()
  destination: string;

  @IsString()
  @IsNotEmpty()
  flightNumber: string;

  @IsPositive()
  price: number;
}
