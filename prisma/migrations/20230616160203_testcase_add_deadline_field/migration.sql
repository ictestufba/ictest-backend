/*
  Warnings:

  - Added the required column `deadline` to the `test_cases` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "test_cases" ADD COLUMN     "deadline" TIMESTAMP(3) NOT NULL;
