-- AlterTable
ALTER TABLE "projects" ALTER COLUMN "is_deleted" DROP DEFAULT;

-- AlterTable
ALTER TABLE "test_cases" ALTER COLUMN "is_deleted" DROP DEFAULT;
