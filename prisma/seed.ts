import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  //seed days
  const days = [
    {
      name: 'Monday',
      openingTime: new Date(2022, 10, 29, 8, 0o0),
      closingTime: new Date(2022, 10, 29, 20, 0o0),
    },
    {
      name: 'Tuesday',
      openingTime: new Date(2022, 10, 29, 8, 0o0),
      closingTime: new Date(2022, 10, 29, 20, 0o0),
    },
    {
      name: 'Wednesday',
      openingTime: new Date(2022, 10, 29, 8, 0o0),
      closingTime: new Date(2022, 10, 29, 20, 0o0),
    },
    {
      name: 'Thursday',
      openingTime: new Date(2022, 10, 29, 8, 0o0),
      closingTime: new Date(2022, 10, 29, 20, 0o0),
    },
    {
      name: 'Friday',
      openingTime: new Date(2022, 10, 29, 8, 0o0),
      closingTime: new Date(2022, 10, 29, 20, 0o0),
    },
    {
      name: 'Saturday',
      openingTime: new Date(2022, 10, 29, 10, 0o0),
      closingTime: new Date(2022, 10, 29, 22, 0o0),
    },
    {
      name: 'Sunday',
      openingTime: new Date(2022, 10, 29, 0o0, 0o0),
      closingTime: new Date(2022, 10, 29, 0o0, 0o0),
    },
  ];

  days.forEach(async (each) => {
    await prisma.weekDay.create({ data: { ...each } });
  });
  //Seed Slots
  const slotsMen = [
    {
      name: 'Men Haircut',
      startDate: new Date(2022, 10, 29),
      appointmentBufferTime: 5,
      appointmentDuration: 10,
      max_bookings: 3,
      max_bookable_days: 7,
      breaks: {
        create: [
          {
            name: 'Cleaning break',
            startTime: new Date(2022, 10, 29, 15, 0o0),
            endTime: new Date(2022, 10, 29, 15, 0o0),
          },
          {
            name: 'Lunch break',
            startTime: new Date(2022, 10, 29, 12, 0o0),
            endTime: new Date(2022, 10, 29, 13, 0o0),
          },
        ],
      },
    },
    {
      name: 'Men Haircut',
      startDate: new Date(2022, 10, 30),
      appointmentBufferTime: 5,
      appointmentDuration: 10,
      max_bookings: 3,
      max_bookable_days: 7,
      breaks: {
        create: [
          {
            name: 'Cleaning break',
            startTime: new Date(2022, 10, 29, 15, 0o0),
            endTime: new Date(2022, 10, 29, 15, 0o0),
          },
          {
            name: 'Lunch break',
            startTime: new Date(2022, 10, 29, 12, 0o0),
            endTime: new Date(2022, 10, 29, 13, 0o0),
          },
        ],
      },
    },
    {
      name: 'Men Haircut',
      startDate: new Date(2022, 10, 31),
      appointmentBufferTime: 5,
      appointmentDuration: 10,
      max_bookings: 3,
      max_bookable_days: 7,
      breaks: {
        create: [
          {
            name: 'Cleaning break',
            startTime: new Date(2022, 10, 29, 15, 0o0),
            endTime: new Date(2022, 10, 29, 15, 0o0),
          },
          {
            name: 'Lunch break',
            startTime: new Date(2022, 10, 29, 12, 0o0),
            endTime: new Date(2022, 10, 29, 13, 0o0),
          },
        ],
      },
      holidays: {
        create: [
          {
            name: 'Diwali',
            startDate: new Date(2022, 11, 0o1, 0o0, 0o0),
            endDate: new Date(2022, 11, 0o1, 0o0, 0o0),
          },
        ],
      },
    },
    {
      name: 'Men Haircut',
      startDate: new Date(2022, 11, 1),
      appointmentBufferTime: 5,
      appointmentDuration: 10,
      max_bookings: 3,
      max_bookable_days: 7,
      breaks: {
        create: [
          {
            name: 'Cleaning break',
            startTime: new Date(2022, 11, 1, 15, 0o0),
            endTime: new Date(2022, 11, 1, 15, 0o0),
          },
          {
            name: 'Lunch break',
            startTime: new Date(2022, 11, 1, 12, 0o0),
            endTime: new Date(2022, 11, 1, 13, 0o0),
          },
        ],
      },
    },
    {
      name: 'Men Haircut',
      startDate: new Date(2022, 11, 2),
      appointmentBufferTime: 5,
      appointmentDuration: 10,
      max_bookings: 3,
      max_bookable_days: 7,
      breaks: {
        create: [
          {
            name: 'Cleaning break',
            startTime: new Date(2022, 11, 2, 15, 0o0),
            endTime: new Date(2022, 11, 2, 15, 0o0),
          },
          {
            name: 'Lunch break',
            startTime: new Date(2022, 11, 2, 12, 0o0),
            endTime: new Date(2022, 11, 2, 13, 0o0),
          },
        ],
      },
    },
    {
      name: 'Men Haircut',
      startDate: new Date(2022, 11, 3),
      appointmentBufferTime: 5,
      appointmentDuration: 10,
      max_bookings: 3,
      max_bookable_days: 7,
      breaks: {
        create: [
          {
            name: 'Cleaning break',
            startTime: new Date(2022, 11, 3, 15, 0o0),
            endTime: new Date(2022, 11, 3, 15, 0o0),
          },
          {
            name: 'Lunch break',
            startTime: new Date(2022, 11, 3, 12, 0o0),
            endTime: new Date(2022, 11, 3, 13, 0o0),
          },
        ],
      },
    },
    {
      name: 'Men Haircut',
      startDate: new Date(2022, 11, 5),
      appointmentBufferTime: 5,
      appointmentDuration: 10,
      max_bookings: 3,
      max_bookable_days: 7,
      breaks: {
        create: [
          {
            name: 'Cleaning break',
            startTime: new Date(2022, 11, 5, 15, 0o0),
            endTime: new Date(2022, 11, 5, 15, 0o0),
          },
          {
            name: 'Lunch break',
            startTime: new Date(2022, 11, 5, 12, 0o0),
            endTime: new Date(2022, 11, 5, 13, 0o0),
          },
        ],
      },
    },
  ];
  slotsMen.forEach(async (each) => {
    await prisma.appointmentSlot.create({
      data: { ...each },
    });
  });
  const slotsWomen = [
    {
      name: 'Women Haircut',
      startDate: new Date(2022, 10, 29),
      appointmentBufferTime: 10,
      appointmentDuration: 60,
      max_bookings: 3,
      max_bookable_days: 7,
      breaks: {
        create: [
          {
            name: 'Cleaning break',
            startTime: new Date(2022, 10, 29, 15, 0o0),
            endTime: new Date(2022, 10, 29, 15, 0o0),
          },
          {
            name: 'Lunch break',
            startTime: new Date(2022, 10, 29, 12, 0o0),
            endTime: new Date(2022, 10, 29, 13, 0o0),
          },
        ],
      },
    },
    {
      name: 'Women Haircut',
      startDate: new Date(2022, 10, 30),
      appointmentBufferTime: 10,
      appointmentDuration: 60,
      max_bookings: 3,
      max_bookable_days: 7,
      breaks: {
        create: [
          {
            name: 'Cleaning break',
            startTime: new Date(2022, 10, 29, 15, 0o0),
            endTime: new Date(2022, 10, 29, 15, 0o0),
          },
          {
            name: 'Lunch break',
            startTime: new Date(2022, 10, 29, 12, 0o0),
            endTime: new Date(2022, 10, 29, 13, 0o0),
          },
        ],
      },
    },
    {
      name: 'Women Haircut',
      startDate: new Date(2022, 10, 31),
      appointmentBufferTime: 10,
      appointmentDuration: 60,
      max_bookings: 3,
      max_bookable_days: 7,
      breaks: {
        create: [
          {
            name: 'Cleaning break',
            startTime: new Date(2022, 10, 29, 15, 0o0),
            endTime: new Date(2022, 10, 29, 15, 0o0),
          },
          {
            name: 'Lunch break',
            startTime: new Date(2022, 10, 29, 12, 0o0),
            endTime: new Date(2022, 10, 29, 13, 0o0),
          },
        ],
      },
      holidays: {
        create: [
          {
            name: 'Diwali',
            startDate: new Date(2022, 11, 0o1, 0o0, 0o0),
            endDate: new Date(2022, 11, 0o1, 0o0, 0o0),
          },
        ],
      },
    },
    {
      name: 'Women Haircut',
      startDate: new Date(2022, 11, 1),
      appointmentBufferTime: 10,
      appointmentDuration: 60,
      max_bookings: 3,
      max_bookable_days: 7,
      breaks: {
        create: [
          {
            name: 'Cleaning break',
            startTime: new Date(2022, 11, 1, 15, 0o0),
            endTime: new Date(2022, 11, 1, 15, 0o0),
          },
          {
            name: 'Lunch break',
            startTime: new Date(2022, 11, 1, 12, 0o0),
            endTime: new Date(2022, 11, 1, 13, 0o0),
          },
        ],
      },
    },
    {
      name: 'Women Haircut',
      startDate: new Date(2022, 11, 2),
      appointmentBufferTime: 10,
      appointmentDuration: 60,
      max_bookings: 3,
      max_bookable_days: 7,
      breaks: {
        create: [
          {
            name: 'Cleaning break',
            startTime: new Date(2022, 11, 2, 15, 0o0),
            endTime: new Date(2022, 11, 2, 15, 0o0),
          },
          {
            name: 'Lunch break',
            startTime: new Date(2022, 11, 2, 12, 0o0),
            endTime: new Date(2022, 11, 2, 13, 0o0),
          },
        ],
      },
    },
    {
      name: 'Women Haircut',
      startDate: new Date(2022, 11, 3),
      appointmentBufferTime: 10,
      appointmentDuration: 60,
      max_bookings: 3,
      max_bookable_days: 7,
      breaks: {
        create: [
          {
            name: 'Cleaning break',
            startTime: new Date(2022, 11, 3, 15, 0o0),
            endTime: new Date(2022, 11, 3, 15, 0o0),
          },
          {
            name: 'Lunch break',
            startTime: new Date(2022, 11, 3, 12, 0o0),
            endTime: new Date(2022, 11, 3, 13, 0o0),
          },
        ],
      },
    },
    {
      name: 'Women Haircut',
      startDate: new Date(2022, 11, 5),
      appointmentBufferTime: 10,
      appointmentDuration: 60,
      max_bookings: 3,
      max_bookable_days: 7,
      breaks: {
        create: [
          {
            name: 'Cleaning break',
            startTime: new Date(2022, 11, 5, 15, 0o0),
            endTime: new Date(2022, 11, 5, 15, 0o0),
          },
          {
            name: 'Lunch break',
            startTime: new Date(2022, 11, 5, 12, 0o0),
            endTime: new Date(2022, 11, 5, 13, 0o0),
          },
        ],
      },
    },
  ];
  slotsWomen.forEach(async (each) => {
    await prisma.appointmentSlot.create({
      data: { ...each },
    });
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
