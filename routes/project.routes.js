import express from "express"

import {
  createProject,
  getAllProjects
} from "../controllers/project.controller.js"

const projectRouter = express.Router()

projectRouter.route("/").post(createProject)
projectRouter.route("/").get(getAllProjects)

export { projectRouter }
