const jwt = require("jsonwebtoken");
require("dotenv").config();
const userModel = require("../models/userModel");

const getUserDetailsFromToken = async (token) => {
  if (!token) {
    return {
      message: "Session Out",
      logout: true,
    };
  }

  const decode = await jwt.verify(token, process.env.JWT_SECREAT_KEY);
  const user = await userModel.findById(decode.id).select("-password");
  return user;
};

module.exports = getUserDetailsFromToken;
