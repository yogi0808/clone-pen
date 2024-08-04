import { useState } from 'react'
import { useDispatch } from 'react-redux'

// Files
import { setUserData } from '../store/features/userSlice'
import toast from 'react-hot-toast'

const useLogin = () => {

    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const login = async (userData) => {
        setLoading(true)
        try {

            const isDataValid = validateData(userData)

            if (!isDataValid) return

            const res = await fetch("/api/v1/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            })

            const data = await res.json()

            if (!res.ok) {
                return toast.error(data.message)
            }

            dispatch(setUserData(data.user))

            toast.success(data.message)

        } catch (e) {
            console.log("Error in login Hook: ", e.message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, login }
}

export default useLogin

const validateData = (data) => {
    const { email, password } = data

    if (!email || !password) {
        toast.error("Provide valid Inputs.")
        return false
    }

    if (password.length < 4) {
        toast.error("Password must be at list 4 Characters.")
        return false
    }

    return true
} 