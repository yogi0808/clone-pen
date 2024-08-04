import User from "../models/userModel.js"
import { generateToken } from "../utils/helper.js"

export const register = async (req, res) => {
    try {
        const { username, email, password, confirmPassword, profilePic } = req.body

        if (!username || !email || !password || !confirmPassword) {
            return res.status(400).json({ message: "Provide valid Inputs." })
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Password Do not mech." })
        }

        const user = await User.findOne({ email })

        if (user) {
            return res.status(400).json({ message: "User already Exist." })
        }

        const newUser = new User({
            username, email, password, profilePic
        })

        await newUser.save()

        if (!newUser) {
            return res.status(400).json({ message: "Invalid user Data." })
        }

        await generateToken(newUser._id, res)



        res.status(200).json({
            message: "User Registered Successfully.", user: {
                id: newUser._id,
                username: newUser.username,
                email: newUser.email
            }
        })
    } catch (e) {
        console.log("Error in register Controller: ", e.message)
        res.status(500).json({ message: "Internal server Error." })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ message: "Provide valid Inputs." })
        }

        const user = await User.findOne({ email })

        if (!user) {
            return res.status(404).json({ message: "User not Found." })
        }

        const isPassValid = await user.comperePassword(password)

        if (!isPassValid) {
            return res.status(401).json({ message: "Invalid credentials." })
        }

        await generateToken(user._id, res)

        res.status(200).json({
            message: "User LoggedIn Successfully.", user: {
                id: user._id,
                username: user.username,
                email: user.email
            }
        })

    } catch (e) {
        console.log("Error in login Controller: ", e.message)
        res.status(500).json({ message: "Internal server Error." })
    }
}

export const logout = async (req, res) => {
    try {

        res.cookie("jwt", "", { maxAge: 0 })
        return res.status(200).json({ message: "Logged out successfully." })

    } catch (e) {
        console.log("Error in logout Controller: ", e.message)
        res.status(500).json({ message: "Internal server Error." })
    }
}