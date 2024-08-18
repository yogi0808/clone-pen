import React from "react"
import Header from "../components/Header"
import { Link } from "react-router-dom"
import useAuth from "../Hooks/useAuth"

const SignIn: React.FC = () => {
  const { loading, register } = useAuth()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const username = formData.get("username") as string
    const email = formData.get("email") as string
    const password = formData.get("password") as string
    const confirmPassword = formData.get("confirmPassword") as string

    register({ username, email, password, confirmPassword })
  }

  return (
    <main className="min-h-screen w-full flex flex-col">
      <Header />
      <div className="w-full h-full flex items-center justify-center flex-1">
        <form
          onSubmit={handleSubmit}
          className="min-w-[450px] p-8 rounded-lg bg-black border border-p-4 flex gap-4 flex-col"
        >
          <h1 className="font-bold text-4xl text-center">Sign In</h1>
          <label
            htmlFor="username"
            className="input-label"
          >
            Username
            <input
              type="text"
              name="username"
              placeholder="Enter Your Username."
              className="input"
              required
            />
          </label>
          <label
            className="input-label"
            htmlFor="email"
          >
            E-mail
            <input
              type="email"
              name="email"
              placeholder="Enter Your E-mail."
              className="input"
              required
            />
          </label>
          <label
            className="input-label"
            htmlFor="password"
          >
            Password
            <input
              type="password"
              name="password"
              placeholder="Enter Your password."
              className="input"
              required
            />
          </label>
          <label
            className="input-label"
            htmlFor="confirmPassword"
          >
            Confirm Password
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password."
              className="input"
              required
            />
          </label>
          <p className="text-w">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-p-3 hover:text-white"
            >
              Login.
            </Link>
          </p>
          <button
            className="btn mt-4"
            disabled={loading}
          >
            {loading ? "Loading..." : "Sign In"}
          </button>
        </form>
      </div>
    </main>
  )
}

export default SignIn
