const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
require("dotenv").config();

const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

const app = express();

// Good Practice: storing spefic version like routes help you to build new features in next version without effecting the current version
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/user", userRouter);
app.use("/app/v1/course", courseRouter);

async function main() {
  //Good Practice: use dotenv file to store the mongoose string
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(4000);
  console.log("listening on port: 4000");
}

main();
