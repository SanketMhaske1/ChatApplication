const { model } = require("mongoose");
const userModel = require("../models/userModel");
const User = require("../models/userModel");
const bcryptjs = require("bcryptjs");

exports.registerUser = async (request, response) => {
  try {
    const { name, email, password, profile_pic } = request.body;

    const checkEmail = await User.findOne({ email });

    if (checkEmail) {
      return response.status(400).json({
        message: "User Already Persent",
        error: true,
      });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(password, salt);

    const payload = {
      name,
      email,
      profile_pic,
      password: hashPassword,
    };

    const user = new userModel(payload);
    const userSave = await user.save();

    return response.status(200).json({
      message: "New User Created Successfully",
      data: userSave,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
};
