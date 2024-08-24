import { useState } from "react"
import { UserForAuth, User } from "../utils/types"
import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import { setUser } from "../store/features/userSlice"

interface AuthHook {
    loading: boolean
    login: (user: Omit<UserForAuth, "username" | "confirmPassword">) => Promise<void>
    register: (user: UserForAuth) => Promise<void>
    logout: () => Promise<void>
}

interface ResponseData {
    message?: string,
    error?: string,
    user: User
}

const useAuth: () => AuthHook = (): AuthHook => {
    const [loading, setLoading] = useState<boolean>(false)

    const dispatch = useDispatch()

    const handleError = (errorMessage: string): void => {
        toast.error(errorMessage)
        console.log("Auth Error: ", errorMessage)
    }

    const authRequest = async (url: string, user: object, successMessage: string, errorMessage: string): Promise<void> => {
        setLoading(true)

        try {

            const res: Response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            })

            const data: ResponseData = await res.json()

            if (!res.ok) {
                handleError(data.error || errorMessage)
                return
            }

            dispatch(setUser(data.user))

            toast.success(data.message || successMessage)

        } catch (e) {
            handleError((e as Error).message)
            return
        } finally {
            setLoading(false)
        }
    }


    const login = async (user: Omit<UserForAuth, "username" | "confirmPassword">): Promise<void> => {
        if (validateLoginData(user)) {
            await authRequest(`/api/v1/auth/login`, user, "Successfully Logged In.", "An Error occurred during login.")
        }
    }

    const register = async (user: UserForAuth): Promise<void> => {

        if (validateRegisterData(user)) {
            await authRequest(`/api/v1/auth/register`, user, "Successfully Registered.", "An Error occurred during Register.")
        }
    }

    const logout = async () => {
        setLoading(true)
        try {

            const res: Response = await fetch(`/api/v1/auth/logout`)

            const data = await res.json()

            if (!res.ok) {
                handleError(data.error)
                return
            }

            localStorage.clear()

            dispatch(setUser(null))

            toast.success(data.message)

        } catch (e) {
            handleError((e as Error).message)
            return
        } finally {
            setLoading(false)
        }
    }

    return { loading, login, register, logout }
}

export default useAuth

const validateLoginData = (user: Omit<UserForAuth, "username" | "confirmPassword">): boolean => {
    const { email, password } = user

    if (!email || !password) {
        toast.error("Provide required Inputs.")
        return false
    }

    if (password.length < 6) {
        toast.error("Password must be at list 6 characters.")
        return false
    }

    return true
}

const validateRegisterData = (user: UserForAuth): boolean => {
    const { email, password, username, confirmPassword } = user

    if (!email || !password || !username || !confirmPassword) {
        toast.error("Provide required Inputs.")
        return false
    }

    if (password.length < 6 || confirmPassword.length < 6) {
        toast.error("Password must be at list 6 characters.")
        return false
    }

    if (password !== confirmPassword) {
        toast.error("Password Do not Match.")
        return false
    }

    return true
}