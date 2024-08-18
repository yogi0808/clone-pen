import jwt from "jsonwebtoken"

// Generating Token using JWT(Json Web Token)
export const generateToken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "15d"
    })

    // Setting token to Cookie with 15 Day of expiry data
    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict"
    })
}