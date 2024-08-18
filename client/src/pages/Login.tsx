import React from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import useAuth from "../Hooks/useAuth"

const Login: React.FC = () => {
  const { loading, login } = useAuth()

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const email = formData.get("email") as string
    const password = formData.get("password") as string

    login({ email, password })
  }

  return (
    <main className="min-h-screen w-full flex flex-col">
      <Header />
      <div className="w-full h-full flex items-center justify-center flex-1">
        <form
          onSubmit={onSubmit}
          className="min-w-[450px] p-8 rounded-lg bg-black border border-p-4 flex gap-4 flex-col"
        >
          <h1 className="font-bold text-4xl text-center">Log In</h1>
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
          <p className="text-w">
            Don't have an account?{" "}
            <Link
              to="/signin"
              className="text-p-3 hover:text-white"
            >
              Sign In.
            </Link>
          </p>
          <button
            className="btn mt-4"
            disabled={loading}
          >
            {loading ? "Loading..." : "Log In"}
          </button>
        </form>
      </div>
    </main>
  )
}

export default Login
