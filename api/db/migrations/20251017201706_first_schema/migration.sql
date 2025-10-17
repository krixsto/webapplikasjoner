/*
  Warnings:

  - You are about to drop the `UserExample` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "UserExample";

-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "user_name" TEXT NOT NULL,
    "email_address" TEXT NOT NULL,
    "pw_hash" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Room" (
    "room_id" SERIAL NOT NULL,
    "room_name" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("room_id")
);

-- CreateTable
CREATE TABLE "Device" (
    "device_id" SERIAL NOT NULL,
    "device_name" TEXT NOT NULL,
    "device_status" BOOLEAN NOT NULL DEFAULT false,
    "room_id" INTEGER NOT NULL,

    CONSTRAINT "Device_pkey" PRIMARY KEY ("device_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_address_key" ON "User"("email_address");

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_room_id_fkey" FOREIGN KEY ("room_id") REFERENCES "Room"("room_id") ON DELETE RESTRICT ON UPDATE CASCADE;
