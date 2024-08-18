import express from "express";
import { Login, Logout, Me, Register } from "../controllers/authControllers.js";

const router = express.Router()

router.route("/register").post(Register)
router.route("/login").post(Login)
router.route("/logout").get(Logout)
router.route("/me").get(Me)

export default router