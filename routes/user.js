const { Router } = require("express");
const bcrypt = require("bcrypt");
const userRouter = Router();
const { auth } = require("./auth");
const { userModal } = require("../db");
const { z } = require("zod");

function inputValidation(req, res, next) {
  const { email, password, firstName, lastName } = req.body;

  const validData = z.object({
    email: z.string().email(),
    password: z.string().min(6).max(25),
    firstName: z.string().min(1),
    lastName: z.string().min(1),
  });

  const inputData = validData.safeParse({
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
  });

  if (!inputData.success) {
    res.status(400).json({
      message: inputData.error.errors,
    });
  } else {
    req.email = email;
    req.password = password;
    req.firstName = firstName;
    req.lastName = lastName;
    next();
  }
}

userRouter.post("/signup", inputValidation, async function (req, res) {
  try {
    const hashedPassword = await bcrypt.hash(req.password, 5);
    console.log(req.email, hashedPassword, req.firstName, req.lastName);
    if (hashedPassword) {
      const user = await userModal.create({
        email: req.email,
        password: hashedPassword,
        firstName: req.firstName,
        lastName: req.lastName,
      });

      res.json({
        message: "you signed up successfully",
        user: user,
      });
      return;
    }
    throw new Error("passworing got failed");
  } catch (error) {
    res.status(503).json({
      message: "error while creating user",
      error: error.message,
    });
  }
});

userRouter.post("/signin", auth, function (req, res) {
  res.json({
    message: "token nd to create",
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
