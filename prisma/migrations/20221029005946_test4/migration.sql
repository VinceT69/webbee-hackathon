-- DropForeignKey
ALTER TABLE "AppointmentSlot" DROP CONSTRAINT "AppointmentSlot_weekDayId_fkey";

-- AlterTable
ALTER TABLE "AppointmentSlot" ALTER COLUMN "weekDayId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "WeekDay" ALTER COLUMN "name" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "AppointmentSlot" ADD CONSTRAINT "AppointmentSlot_weekDayId_fkey" FOREIGN KEY ("weekDayId") REFERENCES "WeekDay"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
