import {
  TestCase,
  Status,
  Severity,
  Priority,
  Type,
  Layer,
  Behavior,
  AutomationStatus,
} from '@prisma/client'
import { ProjectsRepository } from '@/repositories/projects-repository'
import { SuitesRepository } from '@/repositories/suites-repository'
import { TestCasesRepository } from '@/repositories/test-cases-repository'
import { ResourceNotFoundError } from './errors/resource-not-found-error'

interface CreateTestCaseUseCaseRequest {
  project_id: string
  suite_id: string
  title: string
  status: Status
  description: string | null
  severity: Severity
  priority: Priority
  type: Type
  layer: Layer
  is_flaky: boolean
  behavior: Behavior
  automation_status: AutomationStatus
  pre_conditions: string | null
  post_conditions: string | null
}

interface CreateTestCaseUseCaseResponse {
  test_case: TestCase
}

export class CreateTestCaseUseCase {
  constructor(
    private projectsRepository: ProjectsRepository,
    private suitesRepository: SuitesRepository,
    private testCasesRepository: TestCasesRepository,
  ) {}

  async execute({
    project_id,
    suite_id,
    title,
    status,
    description,
    severity,
    priority,
    type,
    layer,
    is_flaky,
    behavior,
    automation_status,
    pre_conditions,
    post_conditions,
  }: CreateTestCaseUseCaseRequest): Promise<CreateTestCaseUseCaseResponse> {
    const project = await this.projectsRepository.findById(project_id)

    if (!project) {
      throw new ResourceNotFoundError()
    }

    const test_case = await this.testCasesRepository.create({
      project_id,
      suite_id,
      title,
      status,
      description,
      severity,
      priority,
      type,
      layer,
      is_flaky,
      behavior,
      automation_status,
      pre_conditions,
      post_conditions,
    })

    return {
      test_case,
    }
  }
}
