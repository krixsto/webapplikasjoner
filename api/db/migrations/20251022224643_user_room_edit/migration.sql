-- DropForeignKey
ALTER TABLE "Room" DROP CONSTRAINT "Room_id_fkey";

-- AlterTable
ALTER TABLE "Room" ADD COLUMN     "userId" INTEGER NOT NULL DEFAULT 0;
