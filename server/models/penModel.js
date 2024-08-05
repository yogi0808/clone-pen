import { model, Schema } from "mongoose";

const penSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    username: {
        type: String,
        required: true,
        maxLength: 25,
        minLength: 3,
    },
    title: {
        type: String,
        minLength: 3,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ["privet", "public"]
    },
    description: {
        type: String,
        required: true
    },
    html: {
        type: String,
        default: ""
    },
    css: {
        type: String,
        default: ""
    },
    js: {
        type: String,
        default: ""
    }
}, { timestamps: true })

const Pen = model("pen", penSchema)
export default Pen