const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./config/connectDB");
const router = require("./routes/index");
const cookiesParser = require("cookie-parser");

const app = express();
connectDB();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(cookiesParser());

app.get("/", (request, response) => {
  response.json({
    message: "Welcome",
  });
});

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server Started To Run On Port ${PORT}`);
});
