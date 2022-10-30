## Installation

```bash
$ npm install
```

## Running the app

```bash
#migrations
npx prisma migrate dev

#seeding
npx prisma db seed

# development
$ npm run start

## Testing - End to End

# e2e tests
$ npm run test:e2e

## View the database
$ npx prisma studio

##Endpoints
# GET /bookings/calendar
 -- Gets all data related to the calendar from the database
 -- Returns a JSON object with all caledar data ie appointment slots, booked appointments, holidays, breaks, and other fields.

# GET /booking/slots/?date=YYYY-MM-DD
 -- Gets all available slots on a given date. The date should be in the format YYYY-MM-DD or YYYY/MM/DD
 -- Returns a JSON object with all the slots available for that date

 # POST /bookings/book
    -- Books an appointment for a specific time slot
    --request body should be a JSON object in the format below;
    -- Each appointment request object should have an appointmentSlotId which is obtained by first querying the available slots.
    {
  "bookings": [
    {
      "appointmentSlotId": "416037c2-6d40-4d9c-a1cc-74eb3608a0846",
      "firstname": "John",
      "lastname": "Doe",
      "email": "johndoe@gmail.com"
    }
  ]
}

-- All extra properties in the request object will be deleted and an object with any invalid properties or property types will be rejected

-- You can book multiple appointments for multiple available slots provided the maximum allowed appointments limit for the slot is not reached.
To implement this, simply add another the request object with multiple appointment requests in the bookings array.

example;

 {
  "bookings": [
    {
      "appointmentSlotId": "id1",
      "firstname": "John",
      "lastname": "Doe",
      "email": "johndoe@gmail.com"
    },
     {
      "appointmentSlotId": "id2",
      "firstname": "Jane",
      "lastname": "Doe",
      "email": "janedoe@gmail.com"
    },
     {
      "appointmentSlotId": "id3",
      "firstname": "Jack",
      "lastname": "Doe",
      "email": "jackdoe@gmail.com"
    }
  ]
}
```
