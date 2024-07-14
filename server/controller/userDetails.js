const getUserDetailsFromToken = require("../helpers/getUserDetailsFromToken");

exports.userDetails = async (request, response) => {
  try {
    const token = request.cookies.token || "";
    const user = await getUserDetailsFromToken(token);
    return response.status(200).json({
      message: "User Detail",
      success: true,
      data: user,
    });
  } catch (error) {
    return response.status(500).json({
      error: error.message || error,
      error: true,
    });
  }
};
