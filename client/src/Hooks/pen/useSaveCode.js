import { useState } from 'react'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'

const useSaveCode = () => {

    const [loading, setLoading] = useState(false)

    const { project } = useSelector((state) => state.project)
    const { user } = useSelector((state) => state.user)

    const saveCode = async () => {
        setLoading(true)
        try {

            if (user.id !== project.user) {
                return toast.error("this pen is not your.")
            }

            const res = await fetch(`/api/v1/pen/save/${project.id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ html: project.html, css: project.css, js: project.js })
            })

            const data = await res.json()

            if (!res.ok) {
                return toast.error(data.message)
            }

            toast.success(data.message)

        } catch (e) {
            console.log("Error in saveCode Hook: ", e.message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, saveCode }
}

export default useSaveCode