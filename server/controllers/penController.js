import { Types } from "mongoose"
import Pen from "../models/penModel.js"

export const createPen = async (req, res) => {
    try {

        const { title, desc, type } = req.body

        const user = req.user

        if (!title || !desc || !type) {
            return res.status(400).json({ message: "provide valid inputs" })
        }

        const newPen = new Pen({
            user: user._id, username: user.username, title, description: desc, type
        })

        await newPen.save()

        res.status(200).json({ message: "new Pen Created Successfully.", penId: newPen._id })

    } catch (e) {
        console.log("Error in createPen Controller: ", e.message)
        res.status(500).json({ message: "Internal server Error." })
    }
}

export const getSinglePen = async (req, res) => {
    try {
        const { penId } = req.params

        if (!penId || !Types.ObjectId.isValid(penId)) {
            return res.status(400).json({ message: "Provide valid Inputs." })
        }

        const pen = await Pen.findById(penId)

        if (!pen) {
            return res.status(404).json({ message: "Pen is not Found." })
        }

        res.status(200).json(pen)

    } catch (e) {
        console.log("Error in getSinglePen controller: ", e.message)
        res.status(500).json({ message: "Internal server Error." })
    }
}

export const getAllPen = async (req, res) => {
    try {

        const pens = await Pen.find()



        res.status(200).json(pens)

    } catch (e) {
        console.log("Error in getAllPen controller: ", e.message)
        res.status(500).json({ message: "Internal server Error." })
    }
}

export const getPens = async (req, res) => {
    try {

        const pens = await Pen.find({ type: "public" })

        res.status(200).json(pens)

    } catch (e) {
        console.log("Error in getPens controller: ", e.message)
        res.status(500).json({ message: "Internal server Error." })
    }
}

export const savePen = async (req, res) => {
    try {

        const { penId } = req.params
        const { css, html, js } = req.body

        const pen = await Pen.findById(penId)

        if (!pen) {
            return res.status(404).json({ message: "Pen is not found." })
        }

        await Pen.findByIdAndUpdate(penId, {
            html,
            css,
            js
        })

        res.status(200).json({ message: "Save Successfully." })

    } catch (e) {
        console.log("Error in savePen Controller: ", e.message)
        res.status(500).json({ message: "Internal server Error." })
    }
}