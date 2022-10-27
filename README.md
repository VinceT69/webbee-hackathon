# webbee-hackathon

Tech requirements

Use an SQL Database with an ORM
Store data in related tables with foreign keys, don't use json columns
Use a high level Javascript or PHP framework (Nest.JS, Laravel, Symfony, ...)
User stories

As a user I would like to book an appointment
As a user I would like to select the date and see all available slots for this day
As a user I want to open the scheduling page and schedule for multiple people at once (think of booking a haircut for yourself and your two kids)
As a business, I want to create different schedulings that have separate configuration for all user stories below
As a business I want to have a configurable break break between appointments
As a business owner I want to offer timeslots for a configurable amount of days (for example starting from today always 7 days)
As a business owner I want to configure breaks
As a business owner I want that a configurable amount (1 or more) clients can book one time slot
As a business owner I want to not get invalid bookings: for booked out slots, out of range, disabled time validation should fail
As a business owner I want to set opening hours which can differ from day to day (for example I want to have different opening hours on weekends and monday)
As a business owner I want create one or multiple breaks (lunch, cleaning, ...), for example a lunch break from 12:00-13:00 and a cleaning break from 15:00-16:00
As a business owner I would like to specify times when I dont work, for example on public holidays
As a business owner I want to create multiple different scheduling events with totally different parameters (hair cut, hair coloring, whatever)
As a business owner I want those different events to be totally separate
As another developer I want peace of mind and just run the automated test suite and know that I did not break anything
Acceptance criteria

A time scheduling JSON based Rest API should be created
1 GET api which provides all data an SPA might need to display a calendar and a time selection
1 POST api which creates a booking for 1 or more people
Implement automated testing that ensures the functionality of your code
For the tests purpose, A booking is done with only an E-Mail, first name and last name
Important: dont trust the frontend, validate the data so that the API returns an exception in case something does not fit into the schema or is already booked out - For a men haircut - booking should not be possible at 7am because its before the shop opens - booking at 8:02 should not be possible because its not fitting in any slot - booking at 12:15 should not be possible as its lunch break - ...
Seed your database with the following scheduling - Men Haircut - slots for the next 7 days, sunday off - from 08:00-20:00 monday to friday - from 10:00-22:00 saturday - lunch break at 12:00-13:00 - cleaning break at 15:00-16:00 - max 3 clients per slot - slots every 10 minutes - 5 minutes cleanup break between slots - the third day starting from now is a public holiday - Woman Haircut - slots for the next 7 days, sunday off - lunch break at 12:00-13:00 - from 08:00-20:00 monday to friday - from 10:00-22:00 saturday - cleaning break at 15:00-16:00 - slots every 1 hour - 10 minutes cleanup break - max 3 clients per slot - the third day starting from now is a public holiday
Due Date
starting from the date of receiving the test, you have 24 hours to submit it.
Grading
Your project will be graded by 3 attributes, each on a scale of 1-10. If an attribute dips below 7 it disqualifies your solution. You need an average score of at least 8 to pass this round.

Feature completeness 1-10
No edge cases & bug free 1-10
Code style & architecture 1-10
Hints
4/10 people fail on feature completeness because they did not read the project description carefully or asked questions. Our tip: Read carefully, check if your project fullfills every user story and ask if you dont understand something 100 %. You can even ask questions during implementing the project - we are here to help!
5/10 people fail because their code is buggy and they have not tested it properly for edge cases. If you test < 2 hours the chance is high, you belong to this category. Our tip: test your stuff!
Code review If you are done, please schedule a code review with me under https://tinyurl.com/tobicodereview. In this call I will grade your code and give you feedback for your personal learning.
