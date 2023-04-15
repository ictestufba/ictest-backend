import express from "express"

import {
    createTestCase,
    deleteTestCase,
    getTestCaseDetails,
    updateTestCase,
    getAllTestCasesFromAProject,
    getAllTestCasesAssignedToAUser,
    assignTestCaseToUser
} from "../controllers/testcase.controller.js"

const testCaseRouter = express.Router()

testCaseRouter.route("/").post(createTestCase)
testCaseRouter.route("/cases/:project_id").get(getAllTestCasesFromAProject)
testCaseRouter.route("/:user_id/:cases").get(getAllTestCasesAssignedToAUser)
testCaseRouter.route("/:id").delete(deleteTestCase)
testCaseRouter.route("/:id").get(getTestCaseDetails)
testCaseRouter.route("/:id").patch(updateTestCase)
testCaseRouter.route("/:id/:user_id").patch(assignTestCaseToUser)

export { testCaseRouter }
