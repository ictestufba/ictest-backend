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

// src/http/controllers/projects/remove-member.ts
var remove_member_exports = {};
__export(remove_member_exports, {
  removeMember: () => removeMember
});
module.exports = __toCommonJS(remove_member_exports);

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

// src/repositories/prisma/prisma-projects-repository.ts
var PrismaProjectsRepository = class {
  async findById(id) {
    const project = await prisma.project.findUnique({
      where: {
        id
      },
      include: {
        members: true
      }
    });
    if (!project || project.is_deleted)
      return null;
    return project;
  }
  async list() {
    return prisma.project.findMany({
      where: { is_deleted: false },
      include: {
        members: {
          include: {
            user: true
          }
        },
        test_cases: true
      }
    });
  }
  async create(data) {
    const project = await prisma.project.create({
      data: { ...data, is_deleted: false }
    });
    return project;
  }
  async delete(projectId) {
    await prisma.project.update({
      where: {
        id: projectId
      },
      data: {
        is_deleted: true
      }
    });
  }
  async findByIdAndUpdate(projectId, data) {
    const project = await prisma.project.update({
      where: {
        id: projectId
      },
      data
    });
    if (!project || project.is_deleted)
      return null;
    return project;
  }
  async addMember(projectId, userId, role) {
    await prisma.project.update({
      where: {
        id: projectId
      },
      data: {
        members: {
          create: {
            user_id: userId,
            role
          }
        }
      }
    });
  }
  async removeMember(projectId, userId) {
    await prisma.project.update({
      where: {
        id: projectId
      },
      data: {
        members: {
          delete: {
            user_id_project_id: {
              user_id: userId,
              project_id: projectId
            }
          }
        }
      }
    });
  }
  async getMemberIds(projectId) {
    const project = await prisma.project.findUnique({
      where: {
        id: projectId
      },
      include: {
        members: true
      }
    });
    if (!project || project.is_deleted)
      return null;
    return project.members.map((user) => user.user_id);
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

// src/use-cases/errors/resource-not-found-error.ts
var ResourceNotFoundError = class extends Error {
  constructor() {
    super("Resource not found.");
  }
};

// src/use-cases/errors/user-does-not-exist-error.ts
var UserDoesNotExistError = class extends Error {
  constructor() {
    super("User does not exist.");
  }
};

// src/use-cases/remove-member-from-project.ts
var RemoveMemberFromProjectUseCase = class {
  constructor(projectsRepository, usersRepository) {
    this.projectsRepository = projectsRepository;
    this.usersRepository = usersRepository;
  }
  async execute({ projectId, userId }) {
    const project = await this.projectsRepository.findById(projectId);
    if (!project) {
      throw new ResourceNotFoundError();
    }
    const user = await this.usersRepository.findById(userId);
    if (!user) {
      throw new UserDoesNotExistError();
    }
    return await this.projectsRepository.removeMember(projectId, userId);
  }
};

// src/use-cases/factories/make-remove-member-from-project-use-case.ts
function makeRemoveMemberFromProjectUseCase() {
  const projectsRepository = new PrismaProjectsRepository();
  const usersRepository = new PrismaUsersRepository();
  const useCase = new RemoveMemberFromProjectUseCase(
    projectsRepository,
    usersRepository
  );
  return useCase;
}

// src/http/controllers/projects/remove-member.ts
var import_zod2 = require("zod");
async function removeMember(request, reply) {
  const removeMemberFromProjectParamsSchema = import_zod2.z.object({
    projectId: import_zod2.z.string().uuid()
  });
  const removeMemberFromProjectBodySchema = import_zod2.z.object({
    userId: import_zod2.z.string().uuid()
  });
  const { projectId } = removeMemberFromProjectParamsSchema.parse(
    request.params
  );
  const { userId } = removeMemberFromProjectBodySchema.parse(request.body);
  const removeMemberFromProjectUseCase = makeRemoveMemberFromProjectUseCase();
  await removeMemberFromProjectUseCase.execute({
    projectId,
    userId
  });
  return reply.status(204).send();
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  removeMember
});
