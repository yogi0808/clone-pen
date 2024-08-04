import express from "express";
import cookieParser from "cookie-parser";

// Files
import authRouters from "./routes/authRoutes.js"
import { configDotenv } from "dotenv";
import connectToDB from "./utils/DB.js";

const app = express();

configDotenv()

app.use(express.json())
app.use(cookieParser())


app.use("/api/v1/auth", authRouters)

const PORT = process.env.PORT

app.listen(PORT, async () => {
    await connectToDB()
    console.log(`http://localhost:${PORT}`)
})