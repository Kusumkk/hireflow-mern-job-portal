const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    candidateName: {
      type: String,
      required: true,
    },

    candidateEmail: {
      type: String,
      required: true,
    },

    resume: {
      type: String,
      default: "",
    },

    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },

    status: {
      type: String,
      default: "Applied",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Application",
  applicationSchema
);