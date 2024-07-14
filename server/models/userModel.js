const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "Provide User Name"],
    },
    email: {
      type: String,
      require: [true, "Provide User Email"],
      unique: true,
    },
    password: {
      type: String,
      require: [true, "Provide User Password"],
    },
    profile_pic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
