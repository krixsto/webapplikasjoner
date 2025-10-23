/*
  Warnings:

  - You are about to drop the column `work_home` on the `Room` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Room" DROP COLUMN "work_home",
ADD COLUMN     "home_work" TEXT NOT NULL DEFAULT 'home';
