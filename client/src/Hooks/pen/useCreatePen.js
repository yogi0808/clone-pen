import { useState } from 'react'
import toast from 'react-hot-toast'

const useCreatePen = () => {

    const [loading, setLoading] = useState(false)

    const createPen = async (penData) => {
        setLoading(true)
        try {
            const isDataValid = validateData(penData)

            if (!isDataValid) return false

            const res = await fetch(`/api/v1/pen`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(penData)
            })

            const data = await res.json()

            if (!res.ok) {
                toast.error(data.message)
                return false
            }


            toast.success(data.message)
            return data.penId
        } catch (e) {
            console.log("Error in createPen Hook: ", e.message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, createPen }
}

export default useCreatePen

const validateData = (data) => {
    const { title, type, desc } = data

    if (!title || !type || !desc) {
        toast.error("Fill All the input fids.")
        return false
    }

    if (type !== "public") {
        if (type !== "privet") {
            toast.error("Provide valid Input.")
            return false
        }
    }

    return true
}