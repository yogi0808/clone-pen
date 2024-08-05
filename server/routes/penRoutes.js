import express from "express";
import { createPen, getAllPen, getPens, getSinglePen, savePen } from "../controllers/penController.js";
import ProtectRoute from "../middlewares/protectRoute.js";

const router = express.Router()

router.route("/").post(ProtectRoute, createPen)
router.route("/single/:penId").get(getSinglePen)
router.route("/save/:penId").post(savePen)
router.route("/all").get(getAllPen)
router.route("/").get(getPens)

export default router