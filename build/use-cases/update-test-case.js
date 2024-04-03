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

// src/use-cases/update-test-case.ts
var update_test_case_exports = {};
__export(update_test_case_exports, {
  UpdateTestCaseUseCase: () => UpdateTestCaseUseCase
});
module.exports = __toCommonJS(update_test_case_exports);

// src/use-cases/errors/resource-not-found-error.ts
var ResourceNotFoundError = class extends Error {
  constructor() {
    super("Resource not found.");
  }
};

// src/use-cases/update-test-case.ts
var UpdateTestCaseUseCase = class {
  constructor(testCasesRepository) {
    this.testCasesRepository = testCasesRepository;
  }
  async execute({
    testCaseId,
    data
  }) {
    const testCaseFound = await this.testCasesRepository.findByAndUpdate(
      testCaseId,
      data
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
  UpdateTestCaseUseCase
});
