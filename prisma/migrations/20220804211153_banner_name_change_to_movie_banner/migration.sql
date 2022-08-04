/*
  Warnings:

  - You are about to drop the column `banner` on the `films` table. All the data in the column will be lost.
  - Added the required column `movie_banner` to the `films` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "films" DROP COLUMN "banner",
ADD COLUMN     "movie_banner" TEXT NOT NULL;
