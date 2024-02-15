/*
  Warnings:

  - Added the required column `date` to the `Match` table without a default value. This is not possible if the table is not empty.
  - Added the required column `end` to the `Tournament` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Tournament` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start` to the `Tournament` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Match" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Tournament" ADD COLUMN     "end" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "start" TIMESTAMP(3) NOT NULL;
