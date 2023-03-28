import express from "express"

import { createProject } from "../controllers/project.controller.js"

const projectRouter = express.Router()

projectRouter.route("/").post(createProject)

export { projectRouter }
