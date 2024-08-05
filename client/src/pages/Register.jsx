import React from "react"
import useRegister from "../Hooks//auth/useRegister"
import Loader from "../components/Loader"

const Register = () => {
  const { loading, register } = useRegister()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    const user = Object.fromEntries(formData)

    console.log(user)

    await register(user)
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="min-w-96 p-8 rounded-lg bg-b-2/80 flex gap-4 flex-col"
      >
        <input
          type="text"
          name="username"
          placeholder="Enter your Username."
          className="input"
          required
        />
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
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password."
          className="input"
          required
        />

        <button
          className="btn hover:!bg-b-1/80"
          disabled={loading}
        >
          {loading ? <Loader /> : "Sign In"}
        </button>
      </form>
    </div>
  )
}

export default Register
