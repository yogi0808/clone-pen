import express from "express";
import ProtectRoute from "../middlewares/protectRoute.js";
import { createPen, getPen, preview, updatePenCode } from "../controllers/penControllers.js";

const router = express.Router()

router.route("/").post(ProtectRoute, createPen)
router.route("/:id").get(getPen)
router.route("/update/:penId").patch(updatePenCode)
router.route("/preview/:id").get(preview)

export default router