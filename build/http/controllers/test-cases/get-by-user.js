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

// src/http/controllers/test-cases/get-by-user.ts
var get_by_user_exports = {};
__export(get_by_user_exports, {
  getByUser: () => getByUser
});
module.exports = __toCommonJS(get_by_user_exports);
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

// src/repositories/prisma/prisma-users-repository.ts
var PrismaUsersRepository = class {
  async findById(id) {
    const user = await prisma.user.findUnique({
      where: {
        id
      }
    });
    return user;
  }
  async findByEmail(email) {
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    });
    return user;
  }
  async findByPartialEmail(email) {
    const users = await prisma.user.findMany({
      where: {
        email: {
          contains: email
        }
      },
      select: {
        id: true,
        name: true,
        email: true,
        avatar: true,
        created_at: true,
        password_hash: false
      }
    });
    return users;
  }
  async create(data) {
    const user = await prisma.user.create({
      data
    });
    return user;
  }
};

// src/use-cases/errors/user-does-not-exist-error.ts
var UserDoesNotExistError = class extends Error {
  constructor() {
    super("User does not exist.");
  }
};

// src/use-cases/get-test-cases-by-user.ts
var GetTestCasesByUserUseCase = class {
  constructor(testCasesRepository, usersRepository) {
    this.testCasesRepository = testCasesRepository;
    this.usersRepository = usersRepository;
  }
  async execute({
    userEmail
  }) {
    const user = await this.usersRepository.findByEmail(userEmail);
    if (!user) {
      throw new UserDoesNotExistError();
    }
    const userId = user.id;
    const testCases = await this.testCasesRepository.getTestCasesByUser(userId);
    return {
      testCases
    };
  }
};

// src/use-cases/factories/make-get-test-cases-by-user-use-case.ts
function makeGetTestCasesByUserUseCase() {
  const testCasesRepository = new PrismaTestCasesRepository();
  const usersRepository = new PrismaUsersRepository();
  const useCase = new GetTestCasesByUserUseCase(
    testCasesRepository,
    usersRepository
  );
  return useCase;
}

// src/http/controllers/test-cases/get-by-user.ts
async function getByUser(request, reply) {
  const getTestCasesByUserParamsSchema = import_zod2.z.object({
    userEmail: import_zod2.z.string().email()
  });
  const { userEmail } = getTestCasesByUserParamsSchema.parse(request.params);
  const getTestCasesByUserUseCase = makeGetTestCasesByUserUseCase();
  const testCases = await getTestCasesByUserUseCase.execute({
    userEmail
  });
  return reply.status(200).send(testCases);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getByUser
});
