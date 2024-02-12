/*
  Warnings:

  - Added the required column `icon` to the `Kart` table without a default value. This is not possible if the table is not empty.
  - Added the required column `icon` to the `Wheel` table without a default value. This is not possible if the table is not empty.
  - Added the required column `icon` to the `Wing` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Kart" ADD COLUMN     "icon" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Wheel" ADD COLUMN     "icon" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Wing" ADD COLUMN     "icon" TEXT NOT NULL;
