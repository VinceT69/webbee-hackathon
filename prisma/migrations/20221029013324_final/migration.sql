/*
  Warnings:

  - You are about to alter the column `weekDayId` on the `AppointmentSlot` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(10)`.
  - You are about to alter the column `name` on the `WeekDay` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(10)`.

*/
-- DropForeignKey
ALTER TABLE "AppointmentSlot" DROP CONSTRAINT "AppointmentSlot_weekDayId_fkey";

-- AlterTable
ALTER TABLE "AppointmentSlot" ALTER COLUMN "weekDayId" SET DATA TYPE VARCHAR(10);

-- AlterTable
ALTER TABLE "WeekDay" ALTER COLUMN "name" SET DATA TYPE VARCHAR(10);

-- AddForeignKey
ALTER TABLE "AppointmentSlot" ADD CONSTRAINT "AppointmentSlot_weekDayId_fkey" FOREIGN KEY ("weekDayId") REFERENCES "WeekDay"("name") ON DELETE RESTRICT ON UPDATE CASCADE;
