import { model, Schema } from "mongoose";
import bcrypt from "bcryptjs"

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        maxLength: 25,
        minLength: 3,
        unique: true
    },
    email: {
        type: String,
        required: true,
        minLength: 5,
        maxLength: 50,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 4,
        maxLength: 15,
    },
    profilePic: {
        type: String,
    }
}, { timestamps: true })


userSchema.pre("save", async function (next) {
    try {
        const saltRound = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(this.password, saltRound)

        this.password = hashPassword
    } catch (e) {
        next(e)
    }
})

userSchema.methods.comperePassword = async function (pass) {
    return await bcrypt.compare(pass, this.password)
}

const User = model("user", userSchema)

export default User