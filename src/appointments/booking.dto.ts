import { Type } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsArray,
  ValidateNested,
  IsEmail,
} from 'class-validator';

export class BookingDto {
  @IsString()
  @IsNotEmpty()
  appointmentSlotId: string;

  @IsString()
  @IsNotEmpty()
  firstname: string;

  @IsString()
  @IsNotEmpty()
  lastname: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
export class BookingsDtoArray {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => BookingDto)
  bookings: BookingDto[];
}
