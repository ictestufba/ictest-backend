import mongoose from "mongoose"

const SuiteSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: false },
    preconditions: { type: String, required: true },
    suites: [{ type: mongoose.Schema.Types.ObjectId, ref: "Suite", required: false}],
    cases: {type: Array, required: false},
    project_id: { type: String, required: true },
  },
  {
    timestamps: true
  }
)

export const Suite = mongoose.model("Suite", SuiteSchema)
