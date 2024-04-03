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

// src/use-cases/assign-test-case-to-user.ts
var assign_test_case_to_user_exports = {};
__export(assign_test_case_to_user_exports, {
  AssignTestCaseToUserUseCase: () => AssignTestCaseToUserUseCase
});
module.exports = __toCommonJS(assign_test_case_to_user_exports);

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

// src/use-cases/assign-test-case-to-user.ts
var AssignTestCaseToUserUseCase = class {
  constructor(testCasesRepository, usersRepository) {
    this.testCasesRepository = testCasesRepository;
    this.usersRepository = usersRepository;
  }
  async execute({
    testCaseId,
    userEmail
  }) {
    const user = await this.usersRepository.findByEmail(userEmail);
    if (!user) {
      throw new UserDoesNotExistError();
    }
    const userId = user.id;
    const testCaseFound = await this.testCasesRepository.assignToUser(
      testCaseId,
      userId
    );
    if (!testCaseFound) {
      throw new ResourceNotFoundError();
    }
    const testCase = await this.testCasesRepository.findById(
      testCaseId
    );
    return {
      testCase
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AssignTestCaseToUserUseCase
});
