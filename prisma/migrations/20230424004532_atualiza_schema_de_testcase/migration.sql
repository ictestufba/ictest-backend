/*
  Warnings:

  - You are about to drop the column `user_id` on the `TestCase` table. All the data in the column will be lost.
  - The `status` column on the `TestCase` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `severity` column on the `TestCase` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `priority` column on the `TestCase` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `type` column on the `TestCase` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `behavior` column on the `TestCase` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `automation_status` column on the `TestCase` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('actual', 'draft', 'deprecated');

-- CreateEnum
CREATE TYPE "Severity" AS ENUM ('not_set', 'blocker', 'critical', 'major', 'normal', 'minor', 'trivial');

-- CreateEnum
CREATE TYPE "Priority" AS ENUM ('not_set', 'high', 'medium', 'low');

-- CreateEnum
CREATE TYPE "Type" AS ENUM ('other', 'functional', 'smoke', 'regression', 'security', 'usability', 'performance', 'acceptance', 'compatibility', 'integration', 'exploratory');

-- CreateEnum
CREATE TYPE "Layer" AS ENUM ('not_set', 'e2e', 'api', 'unit');

-- CreateEnum
CREATE TYPE "Behavior" AS ENUM ('not_set', 'positive', 'negative', 'destructive');

-- CreateEnum
CREATE TYPE "AutomationStatus" AS ENUM ('not_automated', 'to_be_automated', 'automated');

-- DropForeignKey
ALTER TABLE "TestCase" DROP CONSTRAINT "TestCase_user_id_fkey";

-- AlterTable
ALTER TABLE "TestCase" DROP COLUMN "user_id",
ADD COLUMN     "assigned_to" TEXT,
ADD COLUMN     "layer" "Layer" NOT NULL DEFAULT 'not_set',
DROP COLUMN "status",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'actual',
DROP COLUMN "severity",
ADD COLUMN     "severity" "Severity" NOT NULL DEFAULT 'normal',
DROP COLUMN "priority",
ADD COLUMN     "priority" "Priority" NOT NULL DEFAULT 'not_set',
DROP COLUMN "type",
ADD COLUMN     "type" "Type" NOT NULL DEFAULT 'other',
DROP COLUMN "behavior",
ADD COLUMN     "behavior" "Behavior" NOT NULL DEFAULT 'not_set',
DROP COLUMN "automation_status",
ADD COLUMN     "automation_status" "AutomationStatus" NOT NULL DEFAULT 'not_automated';

-- CreateTable
CREATE TABLE "Step" (
    "id" TEXT NOT NULL,
    "action" TEXT NOT NULL,
    "expected_result" TEXT NOT NULL,
    "attachment_id" TEXT NOT NULL,

    CONSTRAINT "Step_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TestCase" ADD CONSTRAINT "TestCase_assigned_to_fkey" FOREIGN KEY ("assigned_to") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Step" ADD CONSTRAINT "Step_attachment_id_fkey" FOREIGN KEY ("attachment_id") REFERENCES "Attachment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
