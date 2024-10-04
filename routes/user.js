const { Router } = require("express");
const userRouter = Router();
const { auth } = require("./auth");
const { userModel } = require("../db");

userRouter.post("/signup", function (req, res) {
  res.json({
    message: "Signup endpoint",
  });
});

userRouter.post("/signin", auth, function (req, res) {
  res.json({
    message: "Signin endpoint",
  });
});

userRouter.get("/purchases", function (req, res) {
  res.json({
    message: "purchases endpoint",
  });
});

module.exports = {
  userRouter: userRouter,
};
