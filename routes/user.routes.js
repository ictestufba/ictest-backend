import express from "express";

import {
  createUser,
  getAllUsers,
  getUser,
} from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.route("/").post(createUser);
userRouter.route("/:id").get(getUser);
userRouter.route("/").get(getAllUsers);

export { userRouter };
