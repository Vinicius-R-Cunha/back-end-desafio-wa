-- CreateTable
CREATE TABLE "films" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "banner" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "director" TEXT NOT NULL,

    CONSTRAINT "films_pkey" PRIMARY KEY ("id")
);
