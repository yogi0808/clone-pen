import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import authRouter from "./routers/authRouter.js"
import penRouter from "./routers/penRouter.js"
import ConnectToDB from "./utils/db.js";

dotenv.config()

const app = express();

app.use(express.json())
app.use(cookieParser())

app.use("/api/v1/auth", authRouter)
app.use("/api/v1/pen", penRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    ConnectToDB()
    console.log(`http://localhost:${PORT}`)
})