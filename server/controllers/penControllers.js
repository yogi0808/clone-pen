import { Types } from "mongoose"
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
            user: { id: user._id, username: user.username },
            projectType
        })

        await newPen.save()

        res.status(200).json({ message: "new Pen Created Successfully.", penId: newPen._id })

    } catch (e) {
        console.log("Error in createPen controller: ", e.message)
        res.status(500).json({ error: "Internal server Error." })
    }
}

export const getPen = async (req, res) => {
    try {

        const { id } = req.params

        if (!id || !Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Provide valid pen id." })
        }

        const pen = await Pen.findById(id)

        if (!pen) {
            return res.status(404).json({ error: "Pen not found." })
        }

        res.status(200).json(pen)

    } catch (e) {
        console.log("Error in getPen controller: ", e.message)
        res.status(500).json({ error: "internal server Error." })
    }
}

export const preview = async (req, res) => {
    try {

        const { id } = req.params

        if (!id || !Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Provide valid pen id." })
        }

        const pen = await Pen.findById(id)

        if (!pen) {
            return res.status(404).json({ error: "Pen not found." })
        }

        const code = `<!DOCTYPE html>
                    <html lang="en">
                    <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>${pen.title}</title>
                    <style>
                    ${pen.css}
                    </style>
                    </head>
                    <body>
                    ${pen.html}
                    <script>
                        ${pen.js}
                    </script>
                    </body>
                    </html>`

        res.send(code)

    } catch (e) {
        console.log("Error in preview controller: ", e.message)
        res.status(500).json({ error: "internal server Error." })
    }
}

export const updatePenCode = async (req, res) => {
    try {
        const { penId } = req.params
        const user = req.user
        const { html, css, js } = req.body

        if (!penId || !Types.ObjectId.isValid(penId)) {
            return res.status(400).json({ error: "Provide valid pen id." })
        }

        const pen = await Pen.findById(penId)

        if (!pen) {
            return res.status(404).json({ error: "Pen not found." })
        }

        if (user._id.toString() !== pen.user.id.toString()) {
            return res.status(400).json({ error: "Your are not the owner of this pen." })
        }

        await Pen.findByIdAndUpdate(penId, {
            html,
            css,
            js
        })

        res.status(200).json({ message: "Saved Successfully." })

    } catch (e) {
        console.log("Error in updatePenCode controller: ", e.message)
        res.status(500).json({ error: "internal server Error." })
    }
}

export const getAllPublicPen = async (req, res) => {
    try {
        const pens = await Pen.find({ projectType: "public" }).select(["-html", "-css", "-js", "-projectType"])

        if (!pens) {
            return rse.status(404).json({ error: "Pens not found." })
        }

        res.status(200).json(pens)
    } catch (e) {
        console.log("Error in getAllPublicPen: ", e.message)
        res.status(500).json({ error: "Internal server Error." })
    }
}