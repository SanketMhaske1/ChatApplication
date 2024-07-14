const getUserDetailsFromToken = require("../helpers/getUserDetailsFromToken");
const userModel = require("../models/userModel");
exports.updateUserDetails = async (request, response) => {
  try {
    const token = request.cookies.token || "";
    const user = await getUserDetailsFromToken(token);

    const { name, profile_pic } = request.body;
    const updateUser = await userModel.updateOne(
      { _id: user._id },
      {
        name,
        profile_pic,
      }
    );

    const userInfomation = await userModel.findById(user._id);

    return response.json({
      message: "User Updated Successfully",
      data: userInfomation,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
};
