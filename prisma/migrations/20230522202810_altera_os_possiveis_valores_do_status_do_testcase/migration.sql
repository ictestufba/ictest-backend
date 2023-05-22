/*
  Warnings:

  - The values [actual,draft,deprecated] on the enum `Status` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Status_new" AS ENUM ('aberto', 'em_progresso', 'falha', 'sucesso');
ALTER TABLE "TestCase" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "TestCase" ALTER COLUMN "status" TYPE "Status_new" USING ("status"::text::"Status_new");
ALTER TYPE "Status" RENAME TO "Status_old";
ALTER TYPE "Status_new" RENAME TO "Status";
DROP TYPE "Status_old";
ALTER TABLE "TestCase" ALTER COLUMN "status" SET DEFAULT 'aberto';
COMMIT;

-- AlterTable
ALTER TABLE "TestCase" ALTER COLUMN "status" SET DEFAULT 'aberto';
