import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeCreateTestCaseUseCase } from '@/use-cases/factories/make-create-test-case-use-case'

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const createTestCaseBodySchema = z.object({
    project_id: z.string().uuid(),
    title: z.string(),
    status: z.enum(['open', 'in_progress', 'error', 'success']).default('open'),
    description: z.string().nullable(),
    priority: z.enum(['not_set', 'high', 'medium', 'low']).default('not_set'),
    type: z
      .enum([
        'other',
        'functional',
        'smoke',
        'regression',
        'security',
        'usability',
        'performance',
        'acceptance',
        'compatibility',
        'integration',
        'exploratory',
      ])
      .default('other'),
    layer: z.enum(['not_set', 'e2e', 'api', 'unit']).default('not_set'),
    behavior: z
      .enum(['not_set', 'positive', 'negative', 'destructive'])
      .default('not_set'),
    automation_status: z
      .enum(['not_automated', 'to_be_automated', 'automated'])
      .default('not_automated'),
    deadline: z.string().nullable().default(null),
  })

  const {
    project_id,
    title,
    status,
    description,
    priority,
    type,
    layer,
    behavior,
    automation_status,
    deadline,
  } = createTestCaseBodySchema.parse(request.body)

  const createTestCaseUseCase = makeCreateTestCaseUseCase()

  const testCase = await createTestCaseUseCase.execute({
    project_id,
    title,
    status,
    description,
    priority,
    type,
    layer,
    behavior,
    automation_status,
    deadline,
  })

  return reply.status(201).send(testCase)
}
