const userModel = require("../models/userModel");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.checkPassword = async (request, response) => {
  try {
    const { password, userId } = request.body;

    const user = await userModel.findById(userId);
    const verifyPassword = await bcryptjs.compare(password, user.password);

    if (!verifyPassword) {
      return response.status(400).json({
        message: "Please Check Password",
        error: true,
      });
    }

    const tokenData = {
      id: user._id,
      email: user.email,
    };

    const token = await jwt.sign(tokenData, process.env.JWT_SECREAT_KEY, {
      expiresIn: "1d",
    });
    const cookieOption = {
      http: true,
      secure: true,
    };

    return response.cookie("token", token, cookieOption).status(200).json({
      message: "Password verify",
      token: token,
      data: verifyPassword,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
};
