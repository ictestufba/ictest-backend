/*
  Warnings:

  - You are about to drop the column `is_flaky` on the `TestCase` table. All the data in the column will be lost.
  - You are about to drop the column `post_conditions` on the `TestCase` table. All the data in the column will be lost.
  - You are about to drop the column `pre_conditions` on the `TestCase` table. All the data in the column will be lost.
  - You are about to drop the column `severity` on the `TestCase` table. All the data in the column will be lost.
  - You are about to drop the `Attachment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Step` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Attachment" DROP CONSTRAINT "Attachment_test_case_id_fkey";

-- DropForeignKey
ALTER TABLE "Step" DROP CONSTRAINT "Step_attachment_id_fkey";

-- AlterTable
ALTER TABLE "TestCase" DROP COLUMN "is_flaky",
DROP COLUMN "post_conditions",
DROP COLUMN "pre_conditions",
DROP COLUMN "severity",
ADD COLUMN     "attachment" TEXT;

-- DropTable
DROP TABLE "Attachment";

-- DropTable
DROP TABLE "Step";

-- DropEnum
DROP TYPE "Severity";
