import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/booking/wrongroute (GET),(POST)', async () => {
    const response = await request(app.getHttpServer()).get(
      '/booking/wrongroute',
    );
    expect(response.status).toEqual(404);
  });

  it('/booking/calendar (GET)', async () => {
    const response = await request(app.getHttpServer()).get(
      '/booking/calendar',
    );
    expect(response.status).toEqual(200);
    expect(response.body).toBeDefined();
    expect(response.body).toHaveProperty('calendar');
  });

  it('/booking/slots/?date=date (GET)', async () => {
    const correct_date_format = ['2022/10/29', '2022-10-29'];
    for (const each of correct_date_format) {
      const response = await request(app.getHttpServer()).get(
        `/booking/slots/?date=${each}`,
      );
      expect(response.status).toEqual(200);
      expect(response.body).toBeDefined();
      expect(response.body).toHaveProperty('slots');
    }

    const wrong_date_format = [
      '29402022',
      '19-2009-30',
      '28/60/19755',
      'wrongdate',
      { wrong: 'date' },
      `${44444}`,
    ];
    for (const each of wrong_date_format) {
      const response = await request(app.getHttpServer()).get(
        `/booking/slots/?date=${each}`,
      );
      expect(response.status).toEqual(400);
      expect(response.body).toHaveProperty('error');
      expect(response.body.error).toEqual(
        'Invalid date, use format YYYY-MM-DD',
      );
    }
  });
  it('/booking/book (POST)', async () => {
    const invalidRequest = ['hello', `${44444}`, '', []];
    for (const each of invalidRequest) {
      const response = await request(app.getHttpServer())
        .post('/booking/book')
        .send(each);
      expect(response.status).toEqual(400);
      expect(response.body).toHaveProperty('error');
    }

    const invalidPropertyTypes = [
      {
        bookings: [
          {
            appointmentSlotId: 'id',
            firstname: 'John',
            lastname: 'Doe',
            email: 'invalidemail',
          },
        ],
      },
      {
        bookings: [
          {
            appointmentSlotId: 'id',
            firstname: 9999,
            lastname: 'Doe',
            email: 'johndoe@gmail.com',
          },
        ],
      },
      {
        bookings: [
          {
            appointmentSlotId: 999999999,
            firstname: 'John',
            lastname: 'Doe',
            email: 'johndoe@gmail.com',
          },
        ],
      },
      {
        bookings: [
          {
            appointmentSlotId: 'id',
            firstname: 'John',
            lastname: ['Doe'],
            email: {},
          },
        ],
      },
    ];
    for (const each of invalidPropertyTypes) {
      const response = await request(app.getHttpServer())
        .post('/booking/book')
        .send(each);
      expect(response.status).toEqual(400);
      expect(response.body).toHaveProperty('error');
    }

    const testSlot = await prisma.appointmentSlot.create({
      data: {
        name: 'Test Slot',
        startDate: new Date(2022, 10, 29),
        appointmentBufferTime: 5,
        appointmentDuration: 10,
        max_bookings: 3,
        max_bookable_days: 7,
      },
    });

    const validBookings = {
      bookings: [
        {
          appointmentSlotId: testSlot.id,
          firstname: 'Tobias',
          lastname: 'Anhalt',
          email: 'tobias@gmail.com',
        },
        {
          appointmentSlotId: testSlot.id,
          firstname: 'Vicent',
          lastname: 'Tugume',
          email: 'vicent@gmail.com',
        },
        {
          appointmentSlotId: testSlot.id,
          firstname: 'John',
          lastname: 'Doe',
          email: 'johndoe@gmail.com',
        },
      ],
    };

    const response = await request(app.getHttpServer())
      .post('/booking/book')
      .send(validBookings);
    expect(response.status).toEqual(201);
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toEqual('Appointment booked');

    const maxBookingsReachedResponse = await request(app.getHttpServer())
      .post('/booking/book')
      .send(validBookings);
    expect(maxBookingsReachedResponse.status).toEqual(400);
    expect(maxBookingsReachedResponse.body).toHaveProperty('error');
    expect(maxBookingsReachedResponse.body.error).toContain(
      'Slot is overbooked',
    );
  });
});
