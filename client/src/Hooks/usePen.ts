import { useState } from 'react'
import toast from 'react-hot-toast'

interface usePenHook {
    loading: boolean
    createPen: (title: string, ProjectType: "privet" | "public" | null) => Promise<string | undefined>
}

const usePen: () => usePenHook = (): usePenHook => {
    const [loading, setLoading] = useState<boolean>(false)

    const createPen: (title: string, projectType: "privet" | "public" | null) => Promise<string | undefined> = async (title: string, projectType: "privet" | "public" | null): Promise<string | undefined> => {
        setLoading(true)
        try {

            if (!title || projectType === null) {
                toast.error("Provide valid Inputs.")
                return
            }

            const res: Response = await fetch(`/api/v1/pen`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title, projectType })
            })

            const data = await res.json()

            if (!res.ok) {
                toast.error(data.error)
            }


            toast.success(data.message)

            return data.penId
        } catch (e) {
            console.log("Error in createPen Hook: ", (e as Error).message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, createPen }
}

export default usePen