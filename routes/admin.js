const { Router } = require("express");
const { auth } = require("./auth");
const adminRouter = Router();
const { adminModal } = require("../db");

adminRouter.post("/signup", function (req, res) {
  res.json({
    message: "Signup endpoint",
  });
});

adminRouter.post("/signin", auth, function (req, res) {
  res.json({
    message: "Signin endpoint",
  });
});

adminRouter.post("/", function (req, res) {
  res.json({
    message: "Signin endpoint",
  });
});

adminRouter.put("/", function (req, res) {
  res.json({
    message: "Signin endpoint",
  });
});
adminRouter.get("/bulk", function (req, res) {
  res.json({
    message: "Signin endpoint",
  });
});

module.exports = {
  adminRouter: adminRouter,
};
