import { model, Schema } from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new Schema({
    username: {
        type: String,
        minLength: 3,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
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

const User = model("User", userSchema)

export default User