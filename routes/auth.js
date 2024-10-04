function auth(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  const user = userModel.findOne({ email: email });

  if (user) {
    if (user.password === password) {
      res.json({
        message: "You signed in",
      });
    } else {
      res.json({
        message: " incorrect credintials",
      });
    }
  } else {
    res.json({
      message: "user doesn't exist, please register",
    });
  }
  next();
}

module.exports = {
  auth,
};
