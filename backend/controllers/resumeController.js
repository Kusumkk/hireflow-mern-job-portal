const User = require("../models/User");

const saveResume = async (req, res) => {
  try {
    const { email, resume } = req.body;

    const user = await User.findOneAndUpdate(
      { email },
      { resume },
      { new: true }
    );

    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  saveResume,
};