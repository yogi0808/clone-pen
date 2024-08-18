import { connect } from "mongoose"

const ConnectToDB = async () => {
    try {

        const URI = process.env.DB_URI

        await connect(URI)

        console.log("Connected to Database.")

    } catch (e) {
        console.log("Error in Database Connection.")
        process.exit(1)
    }
}

export default ConnectToDB