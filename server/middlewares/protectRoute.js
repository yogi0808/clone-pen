import jwt from "jsonwebtoken"

import User from "../models/userModel.js"

const ProtectRoute = async (req, res, next) => {
    try {

        const token = req.cookies.jwt

        if (!token) {
            return res.status(401).json({ message: "Unauthorized - NO Token Provided." })
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET)

        if (!decode) {
            return res.status(401).json({ message: "Unauthorized - Invalid Token" })
        }

        const user = await User.findById(decode.userId).select("-password")

        if (!user) {
            return res.status(404).json({ message: "User not Found." })
        }

        req.user = user

        next()

    } catch (e) {
        console.log("Error in ProtectRoute Middleware: ", e.message)
        next(e)
    }
}

export default ProtectRoute