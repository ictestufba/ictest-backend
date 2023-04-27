import { PrismaSuitesRepository } from '@/repositories/prisma/prisma-suites-repository'
import { GetSuiteDetailsUseCase } from '../get-suite-details'

export function makeGetSuiteDetailsUseCase() {
  const suitesRepository = new PrismaSuitesRepository()

  const useCase = new GetSuiteDetailsUseCase(suitesRepository)

  return useCase
}
