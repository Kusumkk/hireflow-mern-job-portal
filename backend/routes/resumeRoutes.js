const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const {
  saveResume,
} = require("../controllers/resumeController");

// Upload PDF
router.post(
  "/upload",
  upload.single("resume"),
  (req, res) => {
    res.json({
      message: "Resume Uploaded",
      file: req.file,
    });
  }
);

// Save filename in user profile
router.post("/save", saveResume);

module.exports = router;