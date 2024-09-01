import { Dispatch, useState } from 'react'
import toast from 'react-hot-toast'
import { setProject } from '../store/features/codeSlice'
import { useDispatch, useSelector } from 'react-redux'
import { UnknownAction } from '@reduxjs/toolkit'
import { RootState } from '../store/store'
import { setPens } from '../store/features/pensSlice'

interface usePenHook {
    loading: boolean
    createPen: (title: string, ProjectType: "privet" | "public" | null) => Promise<string | undefined>
    getSinglePen: (id: string | undefined) => Promise<void>
    updatePen: (id: string | undefined) => Promise<void>
    getAllPublicPens: () => Promise<void>
}

const usePen: () => usePenHook = (): usePenHook => {
    const [loading, setLoading] = useState<boolean>(false)

    const dispatch: Dispatch<UnknownAction> = useDispatch()

    const code = useSelector((state: RootState) => state.code)

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

    const getSinglePen: (id: string | undefined) => Promise<void> = async (id: string | undefined): Promise<void> => {
        setLoading(true)
        try {

            if (!id) {
                toast.error("Provide valid Input.")
                return
            }

            const res: Response = await fetch(`/api/v1/pen/${id}`)

            const data = await res.json()

            if (!res.ok) {
                toast.error(data.error)
                return
            }

            dispatch(setProject({ id: data._id as string, title: data.title as string, html: data.html as string, js: data.js as string, css: data.css as string, projectType: data.projectType as "private" | "public" }))

        } catch (e) {
            console.log("Error in getPen Hook: ", (e as Error).message)
        } finally {
            setLoading(false)
        }
    }

    const updatePen: (id: string | undefined) => Promise<void> = async (id: string | undefined): Promise<void> => {
        setLoading(true)
        try {

            if (!id) {
                toast.error("Provide valid Input.")
                return
            }

            const res: Response = await fetch(`/api/v1/pen/update/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ html: code.html, css: code.css, js: code.js })
            })

            const data = await res.json()

            if (!res.ok) {
                toast.error(data.error)
                return
            }

            toast.success(data.message)

        } catch (e) {
            console.log("Error in getPen Hook: ", (e as Error).message)
        } finally {
            setLoading(false)
        }
    }

    const getAllPublicPens = async () => {
        setLoading(true)
        try {

            const res: Response = await fetch(`/api/v1/pen/all`)

            const data = await res.json()

            if (!res.ok) {
                toast.error(data.error)
                return
            }

            dispatch(setPens(data))

        } catch (e) {
            console.log("Error in getAllPublicPens", (e as Error).message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, createPen, getSinglePen, updatePen, getAllPublicPens }
}

export default usePen