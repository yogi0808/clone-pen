import express from "express";
import ProtectRoute from "../middlewares/protectRoute.js";
import { createPen, getAllPublicPen, getPen, preview, updatePenCode } from "../controllers/penControllers.js";

const router = express.Router()

router.route("/").post(ProtectRoute, createPen)
router.route("/all").get(getAllPublicPen)
router.route("/:id").get(getPen)
router.route("/update/:penId").patch(ProtectRoute, updatePenCode)
router.route("/preview/:id").get(preview)

export default router