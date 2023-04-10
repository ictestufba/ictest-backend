import express from "express"

import {
    createTestCase,
    deleteTestCase,
    getTestCaseDetails,
    updateTestCase,
    getAllTestCasesFromAProject
} from "../controllers/testCase.controller.js"

const testCaseRouter = express.Router()

testCaseRouter.route("/").post(createTestCase)
testCaseRouter.route("/cases/:project_id").get(getAllTestCasesFromAProject)
testCaseRouter.route("/:id").delete(deleteTestCase)
testCaseRouter.route("/:id").get(getTestCaseDetails)
testCaseRouter.route("/:id").patch(updateTestCase)

export { testCaseRouter }
