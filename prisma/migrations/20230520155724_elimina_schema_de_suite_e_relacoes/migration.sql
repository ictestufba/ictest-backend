/*
  Warnings:

  - You are about to drop the column `suite_id` on the `TestCase` table. All the data in the column will be lost.
  - You are about to drop the `Suite` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Suite" DROP CONSTRAINT "Suite_project_id_fkey";

-- DropForeignKey
ALTER TABLE "TestCase" DROP CONSTRAINT "TestCase_suite_id_fkey";

-- AlterTable
ALTER TABLE "TestCase" DROP COLUMN "suite_id";

-- DropTable
DROP TABLE "Suite";
