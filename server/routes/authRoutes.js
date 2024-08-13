const Router = require("express");
const { registerUser,loginUser } = require("../controllers/authController");

const authRouter = Router();

authRouter.post("/user/register", registerUser);
authRouter.post("/user/login", loginUser);

module.exports = authRouter;
