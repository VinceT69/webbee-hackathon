import { Controller, Get, Query, Req, Res, Post, Body } from '@nestjs/common';
import { Request, Response } from 'express';
import { AppointmentsService } from './appointments.service';
import { BookingsDtoArray } from './booking.dto';

@Controller('booking')
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Get('calendar')
  async getCalendar(@Req() req: Request, @Res() res: Response) {
    try {
      const calendar = await this.appointmentsService.fetchCalendar();
      return res.status(200).json({
        calendar,
      });
    } catch (error) {
      //will add proper error handling
      res.status(400).json({ error: error.message });
    }
  }

  @Get('slots')
  async getSlot(
    @Query() params: { date: string },
    @Req() req: Request,
    @Res() res: Response,
  ) {
    try {
      const slots = await this.appointmentsService.getSlot(params.date);
      return res.status(200).json({
        slots,
      });
    } catch (error) {
      //will add proper error handling
      res.status(400).json({ error: error.message });
    }
  }

  @Post('book')
  async bookAppointment(
    @Body() payload: BookingsDtoArray,
    @Res() res: Response,
  ) {
    const errors = [];
    const { bookings } = payload;
    try {
      for (const each of bookings) {
        await this.appointmentsService.bookAppointment(each);
      }
    } catch (error) {
      errors.push(error.message);
    }
    if (errors.length > 0) {
      res.status(400).json({ error: errors.join(' ') });
    } else {
      res.status(201).json({ message: 'Appointment booked' });
    }
  }
}
