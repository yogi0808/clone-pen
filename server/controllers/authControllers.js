import User from "../models/userModel.js"
import { generateToken } from "../utils/helper.js"

export const Register = async (req, res) => {
    try {
        const { username, email, password, confirmPassword } = req.body

        if (!password || !username || !email || !confirmPassword) {
            return res.status(400).json({ error: "Invalid inputs." })
        }

        if (password.length < 6 || confirmPassword.length < 6) {
            return res.status(400).json({ error: "Password must be at list 6 characters long." })
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Password do not Match." })
        }

        const existedUser = await User.findOne({ email })

        if (existedUser) {
            return res.status(400).json({ error: "User Already Registered." })
        }

        const user = new User({
            email, username, password
        })

        if (user) {
            await user.save()
        }

        await generateToken(user._id, res)

        res.status(201).json({ message: "Register Successfully.", user: { id: user._id, username: user.username, email: user.email, } })

    } catch (e) {
        console.log("Error in Register controller: ", e.message)
        res.status(500).json({ error: "Internal server Error." })
    }
}

export const Login = async (req, res) => {
    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Invalid inputs." })
        }

        if (password.length < 6) {
            return res.status(400).json({ error: "Invalid credentials." })
        }

        const user = await User.findOne({ email })

        if (!user) {
            return res.status(404).json({ error: "User not Found." })
        }

        await generateToken(user._id, res)

        res.status(200).json({ message: "Logged In Successfully.", user: { id: user._id, email: user.email, username: user.username } })

    } catch (e) {
        console.log("Error in Login controller: ", e.message)
        res.status(500).json({ error: "Internal server Error." })
    }
}

export const Logout = async (req, res) => {
    try {

        res.cookie("jwt", "", { maxAge: 0 })
        return res.status(200).json({ message: "Logged out successfully." })

    } catch (e) {
        console.log("Error in Logout controller: ", e.message)
        res.status(500).json({ error: "Internal server Error." })
    }
}

export const Me = async (req, res) => { }