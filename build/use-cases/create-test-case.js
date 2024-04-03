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

// src/use-cases/create-test-case.ts
var create_test_case_exports = {};
__export(create_test_case_exports, {
  CreateTestCaseUseCase: () => CreateTestCaseUseCase
});
module.exports = __toCommonJS(create_test_case_exports);

// src/use-cases/errors/resource-not-found-error.ts
var ResourceNotFoundError = class extends Error {
  constructor() {
    super("Resource not found.");
  }
};

// src/use-cases/create-test-case.ts
var CreateTestCaseUseCase = class {
  constructor(projectsRepository, testCasesRepository) {
    this.projectsRepository = projectsRepository;
    this.testCasesRepository = testCasesRepository;
  }
  async execute({
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
    attachment
  }) {
    const project = await this.projectsRepository.findById(project_id);
    if (!project) {
      throw new ResourceNotFoundError();
    }
    const test_case = await this.testCasesRepository.create({
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
      attachment
    });
    return {
      test_case
    };
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CreateTestCaseUseCase
});
