const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = () => {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connection To DataBase is successfully");
    })
    .catch((error) => {
      console.log("Connection To DataBase is Fail", error);
    });
};

module.exports = connectDB;
