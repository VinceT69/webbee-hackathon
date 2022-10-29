import { IsString, IsNotEmpty, IsNumberString } from 'class-validator';

export class bookingDto {
  @IsString()
  @IsNotEmpty()
  @IsNumberString()
  appointmentSlotId: string;

  @IsString()
  @IsNotEmpty()
  @IsNumberString()
  firstname: string;

  @IsString()
  @IsNotEmpty()
  @IsNumberString()
  lastname: string;

  @IsString()
  @IsNotEmpty()
  @IsNumberString()
  email: string;
}
