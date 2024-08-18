import React from "react"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { RootState } from "../store/store"
import useAuth from "../Hooks/useAuth"

const Header: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.user)

  const { loading, logout } = useAuth()

  const handleLogout: () => void = () => {
    const text: string = "Are you Sure You want to Logout?"

    if (confirm(text)) {
      logout()
    }
  }

  const handleNewPen: () => void = () => {
    const title: string | null = prompt("Title")
    if (!title) return
  }

  return (
    <div className="w-full flex justify-between items-center py-3 md:py-5 bg-p-2 sticky top-0 left-0 px-3 md:px-8">
      <div>
        <NavLink
          to={"/"}
          className="font-semibold text-3xl uppercase tracking-wider px-2 py-1"
        >
          ClonePen
        </NavLink>
      </div>
      <div>
        {user === null ? (
          <>
            <NavLink
              className={({ isActive }) => {
                return `nav-link ${isActive ? "!text-w" : ""}`
              }}
              to="/login"
            >
              Log In
            </NavLink>
            <NavLink
              className={({ isActive }) => {
                return `nav-link ${isActive ? "!text-w" : ""}`
              }}
              to="/signin"
            >
              Sign In
            </NavLink>
          </>
        ) : (
          <>
            <button
              className="nav-link"
              onClick={handleNewPen}
            >
              Start Coding
            </button>

            <button
              className="nav-link"
              onClick={handleLogout}
              disabled={loading}
            >
              {loading ? "Loading..." : "Logout"}
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default Header
