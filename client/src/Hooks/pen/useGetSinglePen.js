import { useState } from 'react'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'

// Files
import { setProjectData } from '../../store/features/projectSlice'

const useGetSinglePen = () => {

    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const getSinglePen = async (penId) => {
        setLoading(true)
        try {

            if (!penId) return toast.error("provide valid Inputs.")

            const res = await fetch(`/api/v1/pen/single/${penId}`)

            const data = await res.json()

            if (!res.ok) {
                return toast.error(data.message)
            }

            dispatch(setProjectData(data))
        } catch (e) {
            console.log("Error in getSinglePen Hook: ", e.message)
        } finally {
            setLoading(false)
        }
    }


    return { loading, getSinglePen }
}

export default useGetSinglePen