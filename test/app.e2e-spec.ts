import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { response } from 'express';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/booking/calendar (GET)', async () => {
    const response = await request(app.getHttpServer()).get(
      '/booking/calendar',
    );
    expect(response.status).toEqual(200);
    expect(response.body).toBeDefined();
  });
  it('/booking/slots/?date=date (GET)', async () => {
    const random_date = '2022/10/29';
    const response = await request(app.getHttpServer()).get(
      `/booking/slots/?date=${random_date}`,
    );
    expect(response.status).toEqual(200);
    expect(response.body).toBeDefined();
  });
});
