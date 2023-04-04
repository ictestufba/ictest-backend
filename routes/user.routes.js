import express from "express";

import {
  changePassword,
  createUser,
  getAllUsers,
  getUser,
  updateUser,
} from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.route("/").post(createUser);
userRouter.route("/:id").get(getUser);
userRouter.route("/").get(getAllUsers);
userRouter.route("/:id").put(updateUser);
userRouter.route("/:id").patch(changePassword);

export { userRouter };
