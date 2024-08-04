import mongoose from "mongoose"

const connectToDB = async () => {

    const URI = process.env.DB_URI

    try {

        await mongoose.connect(URI)

        console.log("Connected to DB.")
    } catch (e) {
        console.log("Fall to Connect to DB.")
        process.exit(0)
    }
}

export default connectToDB