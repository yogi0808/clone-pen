import { model, Schema } from "mongoose"

const penSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        default: "",
    },
    projectType: {
        type: String,
        required: true,
        enum: ["privet", "public"]
    }
}, { timestamps: true })

const Pen = model("Pen", penSchema)

export default Pen