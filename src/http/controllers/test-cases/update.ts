import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeUpdateTestCaseUseCase } from '@/use-cases/factories/make-update-test-case-use-case'

export async function update(request: FastifyRequest, reply: FastifyReply) {
  const updateTestCaseParamsSchema = z.object({
    testCaseId: z.string().uuid(),
  })

  const updateTestCaseBodySchema = z.object({
    data: z.object({
      title: z.string().optional(),
      status: z.enum(['actual', 'draft', 'deprecated']).optional(),
      description: z.string().nullable().optional(),
      severity: z
        .enum([
          'not_set',
          'blocker',
          'critical',
          'major',
          'normal',
          'minor',
          'trivial',
        ])
        .optional(),
      priority: z.enum(['not_set', 'high', 'medium', 'low']).optional(),
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
        .optional(),
      layer: z.enum(['not_set', 'e2e', 'api', 'unit']).optional(),
      is_flaky: z.boolean().optional(),
      behavior: z
        .enum(['not_set', 'positive', 'negative', 'destructive'])
        .optional(),
      automation_status: z
        .enum(['not_automated', 'to_be_automated', 'automated'])
        .optional(),
      pre_conditions: z.string().nullable().optional(),
      post_conditions: z.string().nullable().optional(),
    }),
  })

  const { testCaseId } = updateTestCaseParamsSchema.parse(request.params)

  const { data } = updateTestCaseBodySchema.parse(request.body)

  const updateTestCaseUseCase = makeUpdateTestCaseUseCase()

  const testCase = await updateTestCaseUseCase.execute({
    testCaseId,
    data,
  })

  return reply.status(200).send(testCase)
}
