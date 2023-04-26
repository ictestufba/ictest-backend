import { PrismaSuitesRepository } from '@/repositories/prisma/prisma-suites-repository'
import { DeleteSuiteUseCase } from '../delete-suite'

export function makeDeleteSuiteUseCase() {
  const suitesRepository = new PrismaSuitesRepository()

  const useCase = new DeleteSuiteUseCase(suitesRepository)

  return useCase
}
