import express from "express";
import ProtectRoute from "../middlewares/protectRoute.js";
import { createPen } from "../controllers/penControllers.js";

const router = express.Router()

router.route("/").post(ProtectRoute, createPen)

export default router