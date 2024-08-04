import { useState } from 'react'
import toast from "react-hot-toast"
import { useDispatch } from 'react-redux'

// Files
import { setUserData } from '../store/features/userSlice'

const useRegister = () => {

    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const register = async (userData) => {
        setLoading(true)
        try {

            const isDataValid = validateData(userData)

            if (!isDataValid) return

            const res = await fetch("/api/v1/auth", {
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
            console.log("Error in register Hook: ", e.message)
        } finally {
            setLoading(false)
        }
    }

    return { loading, register }
}

export default useRegister

const validateData = (data) => {
    const { username, email, password, confirmPassword } = data

    if (!username || !email || !password || !confirmPassword) {
        toast.error("Provide valid Inputs.")
        return false
    }

    if (username.length < 3) {
        toast.error("Username must be at list 3 characters.")
        return false
    }

    if (password.length < 4 || confirmPassword.length < 4) {
        toast.error("Password must be at list 4 Characters.")
        return false
    }

    if (password !== confirmPassword) {
        toast.error("Password Do not mech.")
        return false
    }

    return true
} 