import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { BookingDto } from './booking.dto';
const prismaInstance = new PrismaClient();

@Injectable()
export class AppointmentsService {
  prisma = prismaInstance;
  public async fetchCalendar() {
    try {
      return await this.prisma.appointmentSlot.findMany({
        select: {
          id: true,
          name: true,
          startDate: true,
          weekDayId: true,
          appointmentBufferTime: true,
          appointmentDuration: true,
          max_bookings: true,
          max_bookable_days: true,
          breaks: {
            select: { name: true, startTime: true, endTime: true },
          },
          bookedAppointments: {
            select: {
              id: true,
              firstname: true,
              lastname: true,
              email: true,
            },
          },
          holidays: {
            select: {
              name: true,
              startDate: true,
              endDate: true,
            },
          },
        },
      });
    } catch (error) {
      throw error;
    }
  }

  public async getSlot(date: string) {
    try {
      return await this.prisma.appointmentSlot.findMany({
        where: {
          startDate: new Date(date),
        },
        select: {
          id: true,
          name: true,
          startDate: true,
          appointmentBufferTime: true,
          appointmentDuration: true,
          max_bookings: true,
          max_bookable_days: true,
        },
      });
    } catch (error) {
      throw new Error('Invalid date, use format YYYY-MM-DD');
    }
  }

  public async bookAppointment(data: BookingDto) {
    try {
      const isvalidSlot = await this.isValidTimeSlot(data.appointmentSlotId);
      if (!isvalidSlot) {
        throw new Error('Invalid timeslot');
      }
      const overBooked = await this.isOverBooked(data.appointmentSlotId);
      if (overBooked) {
        throw new Error('Slot is overbooked');
      }
      return await this.prisma.appointment.create({
        data: { ...data },
      });
    } catch (error) {
      throw error;
    }
  }

  private async isOverBooked(appointmentslotID: string) {
    try {
      const slot = await this.prisma.appointmentSlot.findUnique({
        where: {
          id: appointmentslotID,
        },
      });
      const count = await this.prisma.appointment.count({
        where: {
          appointmentSlotId: appointmentslotID,
        },
      });
      if (count < slot.max_bookings) {
        return false;
      }
      return true;
    } catch (exception) {
      throw exception;
    }
  }
  private async isValidTimeSlot(appointmentslotID: string) {
    try {
      const valid = await this.prisma.appointmentSlot.findUniqueOrThrow({
        where: {
          id: appointmentslotID,
        },
      });

      if (valid) {
        return true;
      }
    } catch (exception) {
      return false;
    }
  }
}
