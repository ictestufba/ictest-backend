import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";

import { projectRouter } from "./routes/project.routes.js";
import { suiteRouter } from "./routes/suite.routes.js";
import { userRouter } from "./routes/user.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/projects", projectRouter);
app.use("/suites", suiteRouter);
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);

    app.listen(8080, () => {
      console.log("Server started on port http://localhost:8080");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
