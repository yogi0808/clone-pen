import { useState } from 'react'
import toast from 'react-hot-toast'
import { setPens } from '../../store/features/publicPensSlice'
import { useDispatch } from 'react-redux'

const useGetPublicPens = () => {

    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()

    const getPublicPens = async () => {
        setLoading(true)
        try {

            const res = await fetch("/api/v1/pen")

            const data = await res.json()

            if (!res.ok) {
                return toast.error(data.message)
            }

            dispatch(setPens(data))

        } catch (e) {
            console.log("Error in getPublicPens Hook: ", e.message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, getPublicPens }
}

export default useGetPublicPens