exports.logout = async (request, response) => {
  try {
    const cookieOption = {
      http: true,
      secure: true,
    };

    return response.cookie("token", "", cookieOption).status(200).json({
      message: "Session Out",
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || error,
      error: true,
    });
  }
};
