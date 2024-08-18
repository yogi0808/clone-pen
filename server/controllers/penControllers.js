import Pen from "../models/penModel.js"

export const createPen = async (req, res) => {
    try {

        const { title, projectType } = req.body
        const user = req.user

        if (!title || !projectType) {
            return res.status(400).json({ error: "Provide Valid inputs." })
        }

        const newPen = Pen({
            title,
            user: user._id,
            projectType
        })

        await newPen.save()

        res.status(200).json({ message: "new Pen Created Successfully.", penId: newPen._id })

    } catch (e) {
        console.log("Error in createPen controller: ", e.message)
        res.status(500).json({ error: "Internal server Error." })
    }
}