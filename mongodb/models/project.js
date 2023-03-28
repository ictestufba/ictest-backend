import mongoose from "mongoose"

const ProjectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    code: { type: String, required: true },
    description: { type: String, required: false },
    access_type: {
      type: String,
      enum: ["private", "public"],
      default: "private",
      required: true
    },
    member_access: {
      type: String,
      enum: ["add_all", "add_specific", "dont_add"],
      default: "add_all",
      required: true
    }
  },
  {
    timestamps: true
  }
)

export const projectModel = mongoose.model("Project", ProjectSchema)
