import mongoose from "mongoose"

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    avatar: { type: String, required: false },
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }]
  },
  {
    timestamps: true
  }
)

export const User = mongoose.model("User", UserSchema)
