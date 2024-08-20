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

// src/http/controllers/projects/get-members.ts
var get_members_exports = {};
__export(get_members_exports, {
  getMembers: () => getMembers
});
module.exports = __toCommonJS(get_members_exports);
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
      where: {
        is_deleted: false
      },
      include: {
        members: {
          include: {
            user: true
          }
        },
        test_cases: {
          where: {
            is_deleted: false
          }
        }
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

// src/use-cases/errors/resource-not-found-error.ts
var ResourceNotFoundError = class extends Error {
  constructor() {
    super("Resource not found.");
  }
};

// src/use-cases/get-members-from-project.ts
var GetMembersFromProjectUseCase = class {
  constructor(projectsRepository, usersRepository) {
    this.projectsRepository = projectsRepository;
    this.usersRepository = usersRepository;
  }
  async execute({
    projectId
  }) {
    const response = await this.projectsRepository.getMemberIds(projectId);
    if (!response) {
      throw new ResourceNotFoundError();
    }
    const users = [];
    for (let i = 0; i < response.length; i++) {
      const user = await this.usersRepository.findById(response[i]);
      if (user)
        users.push({
          id: user.id,
          name: user.name,
          email: user.email,
          avatar: user.avatar,
          created_at: user.created_at
        });
    }
    return { users };
  }
};

// src/use-cases/factories/make-get-members-from-project-use-case.ts
function makeGetMembersFromProjectUseCase() {
  const projectsRepository = new PrismaProjectsRepository();
  const usersRepository = new PrismaUsersRepository();
  const useCase = new GetMembersFromProjectUseCase(
    projectsRepository,
    usersRepository
  );
  return useCase;
}

// src/http/controllers/projects/get-members.ts
async function getMembers(request, reply) {
  const getMembersFromProjectParamsSchema = import_zod2.z.object({
    projectId: import_zod2.z.string().uuid()
  });
  const { projectId } = getMembersFromProjectParamsSchema.parse(request.params);
  const getMembersFromProjectUseCase = makeGetMembersFromProjectUseCase();
  const users = await getMembersFromProjectUseCase.execute({
    projectId
  });
  return reply.status(200).send(users);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getMembers
});
