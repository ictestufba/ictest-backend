import mongoose from "mongoose"

const ProjectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    code: { type: String, required: true },
    description: { type: String, required: false },
    visibility: {
      type: String,
      enum: ["private", "public"],
      default: "private",
      required: true
    },
    member_access: {
      type: String,
      enum: ["add_all", "add_specific", "dont_add"],
      required: true
    }
  },
  {
    timestamps: true
  }
)

export const Project = mongoose.model("Project", ProjectSchema)
