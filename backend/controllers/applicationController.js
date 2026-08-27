const Application = require("../models/Application");

// Apply Job
const applyJob = async (req, res) => {
  try {
    const application = await Application.create({
      candidateName: req.body.candidateName,
      candidateEmail: req.body.candidateEmail,
      resume: req.body.resume,
      jobId: req.body.jobId,
    });

    res.status(201).json(application);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get Applications
const getApplications = async (req, res) => {
  try {
    const applications =
      await Application.find().populate("jobId");

    res.json(applications);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const updateApplicationStatus = async (
  req,
  res
) => {
  try {
    const application =
      await Application.findByIdAndUpdate(
        req.params.id,
        {
          status: req.body.status,
        },
        {
          new: true,
        }
      );

    res.json(application);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  applyJob,
  getApplications,
  updateApplicationStatus,
};
