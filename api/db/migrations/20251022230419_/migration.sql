/*
  Warnings:

  - The primary key for the `Device` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `device_id` on the `Device` table. All the data in the column will be lost.
  - The primary key for the `Room` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `room_id` on the `Room` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Device" DROP CONSTRAINT "Device_room_id_fkey";

-- AlterTable
ALTER TABLE "Device" DROP CONSTRAINT "Device_pkey",
DROP COLUMN "device_id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Device_pkey" PRIMARY KEY ("id");

-- AlterTable
CREATE SEQUENCE room_id_seq;
ALTER TABLE "Room" DROP CONSTRAINT "Room_pkey",
DROP COLUMN "room_id",
ALTER COLUMN "id" SET DEFAULT nextval('room_id_seq'),
ADD CONSTRAINT "Room_pkey" PRIMARY KEY ("id");
ALTER SEQUENCE room_id_seq OWNED BY "Room"."id";

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_id_fkey" FOREIGN KEY ("id") REFERENCES "Room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
