import express from "express";
import ProtectRoute from "../middlewares/protectRoute.js";
import { createPen, getPen } from "../controllers/penControllers.js";

const router = express.Router()

router.route("/").post(ProtectRoute, createPen)
router.route("/:id").get(getPen)

export default router