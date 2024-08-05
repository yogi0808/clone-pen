import React from "react"
import Loader from "../components/Loader"
import useLogin from "../Hooks/auth/useLogin"

const Login = () => {
  const { loading, login } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    const user = Object.fromEntries(formData)

    await login(user)
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="min-w-96 p-8 rounded-lg bg-b-2/80 flex gap-4 flex-col"
      >
        <input
          type="email"
          name="email"
          placeholder="Enter your E-mail."
          className="input"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your Password."
          className="input"
          required
        />
        <button
          className="btn hover:!bg-b-1/80"
          disabled={loading}
        >
          {loading ? <Loader /> : "Log In"}
        </button>
      </form>
    </div>
  )
}

export default Login
