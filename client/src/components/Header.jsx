import React from "react"
import toast from "react-hot-toast"
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

// Files
import SearchSvg from "../svg/SearchSvg"
import { logout } from "../store/features/userSlice"

const Header = () => {
  const { user } = useSelector((state) => state.user)

  const dispatch = useDispatch()

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/v1/auth/logout")

      const data = await res.json()

      if (!res.ok) {
        return toast.error(data.message)
      }

      toast.success(data.message)
      dispatch(logout())
    } catch (e) {
      console.log("Error in logout: ", e.message)
    }
  }

  return (
    <div className="w-full px-4 py-5 border-b border-b-2 flex justify-between items-center backdrop-blur-lg sticky top-0 right-0 z-50">
      <label className="w-fit h-fit relative">
        <SearchSvg />
        <input
          type="text"
          placeholder="Search ClonePens..."
          className="input !pl-10"
        />
      </label>
      <div className="flex gap-3">
        {user ? (
          <>
            <NavLink className="btn">Your Work</NavLink>
            <button
              onClick={handleLogout}
              className="btn"
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <NavLink
              to="/signin"
              className="btn !bg-g rounded-md hover:!bg-g/60 hover:!text-w !text-black"
            >
              Sign In
            </NavLink>
            <NavLink
              to="/login"
              className="btn"
            >
              Log In
            </NavLink>
          </>
        )}
      </div>
    </div>
  )
}

export default Header
