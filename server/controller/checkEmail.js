const userModel = require("../models/userModel");

exports.checkEmail = async (request, response) => {
  try {
    const { email } = request.body;
    const checkEmail = await userModel.findOne({ email }).select("-password");

    if (!checkEmail) {
      return response.status(400).json({
        message: "User Not Email",
        error: true,
      });
    }

    return response.status(200).json({
      message: "Email verify",
      success: true,
      data: checkEmail,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
};
