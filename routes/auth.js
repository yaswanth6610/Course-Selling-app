const bcrypt = require("bcrypt");
const { userModal } = require("../db");

async function auth(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const user = await userModal.findOne({ email: email });
    console.log(user);

    if (user) {
      const checkPassword = await bcrypt.compare(password, user.password);
      if (checkPassword) {
        res.json({
          message: "You signed in",
        });
        return;
      } else {
        res.status(401).json({
          message: " incorrect credintials",
        });
      }
    } else {
      res.json({
        message: "user doesn't exist, please register",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      error: error.message,
    });
  }
}

module.exports = {
  auth,
};
