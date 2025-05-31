import { Router } from "express";
import { registerUser, LoginUser, LogOutUser } from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// Signup route
router.route("/signup").post(registerUser);

// Signin (login) route
router.route("/signin").post(LoginUser);




// secured routes

router.route("/logout").post(verifyJWT, LogOutUser)

export default router;
