import express from "express";

import { createUser, getUser } from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.route("/").post(createUser);
userRouter.route("/:id").get(getUser);

export { userRouter };
