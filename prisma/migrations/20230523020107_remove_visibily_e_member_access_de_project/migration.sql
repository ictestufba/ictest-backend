/*
  Warnings:

  - You are about to drop the column `member_access` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the column `visibility` on the `projects` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "projects" DROP COLUMN "member_access",
DROP COLUMN "visibility";

-- DropEnum
DROP TYPE "MemberAccess";

-- DropEnum
DROP TYPE "Visibility";
