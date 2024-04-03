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

// src/http/controllers/users/get-users-by-partial-email.ts
var get_users_by_partial_email_exports = {};
__export(get_users_by_partial_email_exports, {
  getUsers: () => getUsers
});
module.exports = __toCommonJS(get_users_by_partial_email_exports);

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

// src/use-cases/get-users-by-partial-email.ts
var GetUsersByPartialEmailUseCase = class {
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }
  async execute({
    email
  }) {
    const users = await this.usersRepository.findByPartialEmail(email);
    return { users };
  }
};

// src/use-cases/factories/make-get-users-by-partial-email-use-case.ts
function makeGetUsersByPartialEmailUseCase() {
  const usersRepository = new PrismaUsersRepository();
  const useCase = new GetUsersByPartialEmailUseCase(usersRepository);
  return useCase;
}

// src/http/controllers/users/get-users-by-partial-email.ts
var import_zod2 = require("zod");
async function getUsers(request, reply) {
  const getMembersFromProjectParamsSchema = import_zod2.z.object({
    email: import_zod2.z.string().optional()
  });
  const { email } = getMembersFromProjectParamsSchema.parse(request.query);
  const getUsersByPartialEmailUseCase = makeGetUsersByPartialEmailUseCase();
  const users = await getUsersByPartialEmailUseCase.execute({
    email: email ?? ""
  });
  return reply.status(200).send(users);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  getUsers
});
