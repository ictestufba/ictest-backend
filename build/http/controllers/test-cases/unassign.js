"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/http/controllers/test-cases/unassign.ts
var unassign_exports = {};
__export(unassign_exports, {
  unassign: () => unassign
});
module.exports = __toCommonJS(unassign_exports);
var import_zod2 = require("zod");

// src/env/index.ts
var import_config = require("dotenv/config");
var import_zod = require("zod");
var envSchema = import_zod.z.object({
  NODE_ENV: import_zod.z.enum(["dev", "test", "production"]).default("dev"),
  JWT_SECRET: import_zod.z.string(),
  PORT: import_zod.z.coerce.number().default(8080)
});
var _env = envSchema.safeParse(process.env);
if (_env.success === false) {
  console.error("\u274C Invalid environment variables", _env.error.format());
  throw new Error("Invalid environment variables.");
}
var env = _env.data;

// src/lib/prisma.ts
var import_client = require("@prisma/client");
var prisma = new import_client.PrismaClient({
  log: env.NODE_ENV === "dev" ? ["query"] : []
});

// src/repositories/prisma/prisma-test-cases-repository.ts
var PrismaTestCasesRepository = class {
  async findById(id) {
    const testCase = await prisma.testCase.findUnique({
      where: {
        id
      }
    });
    if (!testCase || testCase.is_deleted)
      return null;
    return testCase;
  }
  async create(data) {
    const testCase = await prisma.testCase.create({
      data: { ...data, is_deleted: false }
    });
    return testCase;
  }
  async delete(testCaseId) {
    await prisma.testCase.update({
      where: {
        id: testCaseId
      },
      data: {
        is_deleted: true
      }
    });
  }
  async findByAndUpdate(testCaseId, data) {
    const testCase = await prisma.testCase.update({
      where: {
        id: testCaseId
      },
      data
    });
    if (!testCase || testCase.is_deleted)
      return null;
    return testCase;
  }
  async getTestCasesByProjectId(projectId) {
    const testCases = await prisma.testCase.findMany({
      where: {
        project_id: projectId,
        is_deleted: false
      }
    });
    return testCases;
  }
  async assignToUser(testCaseId, userId) {
    const testCase = await prisma.testCase.update({
      where: {
        id: testCaseId
      },
      data: {
        assigned_to: {
          set: userId
        }
      }
    });
    if (!testCase || testCase.is_deleted)
      return null;
    return testCase;
  }
  async unassign(testCaseId) {
    const testCase = await prisma.testCase.update({
      where: {
        id: testCaseId
      },
      data: {
        assigned_to: {
          set: null
        }
      }
    });
    if (!testCase || testCase.is_deleted)
      return null;
    return testCase;
  }
  async getTestCasesByUser(userId) {
    const testCases = await prisma.testCase.findMany({
      where: {
        assigned_to: userId,
        is_deleted: false
      }
    });
    return testCases;
  }
};

// src/use-cases/errors/resource-not-found-error.ts
var ResourceNotFoundError = class extends Error {
  constructor() {
    super("Resource not found.");
  }
};

// src/use-cases/unassign-test-case.ts
var UnassignTestCaseUseCase = class {
  constructor(testCasesRepository) {
    this.testCasesRepository = testCasesRepository;
  }
  async execute({
    testCaseId
  }) {
    const testCase = await this.testCasesRepository.unassign(testCaseId);
    if (!testCase) {
      throw new ResourceNotFoundError();
    }
    await this.testCasesRepository.findById(testCaseId);
    return {
      testCase
    };
  }
};

// src/use-cases/factories/make-unassign-test-case.ts
function makeUnassignTestCaseUseCase() {
  const testCasesRepository = new PrismaTestCasesRepository();
  const useCase = new UnassignTestCaseUseCase(testCasesRepository);
  return useCase;
}

// src/http/controllers/test-cases/unassign.ts
async function unassign(request, reply) {
  const unassignTestCaseParamsSchema = import_zod2.z.object({
    testCaseId: import_zod2.z.string().uuid()
  });
  const { testCaseId } = unassignTestCaseParamsSchema.parse(request.params);
  const unassignTestCaseUseCase = makeUnassignTestCaseUseCase();
  const testCase = await unassignTestCaseUseCase.execute({
    testCaseId
  });
  return reply.status(200).send(testCase);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  unassign
});
