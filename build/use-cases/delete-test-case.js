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

// src/use-cases/delete-test-case.ts
var delete_test_case_exports = {};
__export(delete_test_case_exports, {
  DeleteTestCaseUseCase: () => DeleteTestCaseUseCase
});
module.exports = __toCommonJS(delete_test_case_exports);

// src/use-cases/errors/resource-not-found-error.ts
var ResourceNotFoundError = class extends Error {
  constructor() {
    super("Resource not found.");
  }
};

// src/use-cases/delete-test-case.ts
var DeleteTestCaseUseCase = class {
  constructor(testCasesRepository) {
    this.testCasesRepository = testCasesRepository;
  }
  async execute({ testCaseId }) {
    const testCaseToBeDeleted = await this.testCasesRepository.findById(
      testCaseId
    );
    if (!testCaseToBeDeleted) {
      throw new ResourceNotFoundError();
    }
    await this.testCasesRepository.delete(testCaseId);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DeleteTestCaseUseCase
});
