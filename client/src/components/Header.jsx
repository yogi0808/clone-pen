import React from "react"
import SearchSvg from "../svg/SearchSvg"
import { NavLink } from "react-router-dom"

const Header = () => {
  const isLogedin = false
  return (
    <div className="w-full px-4 py-5 border-b border-b-2 flex justify-between items-center backdrop-blur-lg sticky top-0 right-0">
      <label className="w-fit h-fit relative">
        <SearchSvg />
        <input
          type="text"
          placeholder="Search ClonePens..."
          className="input !pl-10"
        />
      </label>
      <div className="flex gap-3">
        {isLogedin && <NavLink>Your Work</NavLink>}
        <NavLink
          to="/signin"
          className="px-4 py-2 bg-g rounded-md hover:bg-g/60 hover:text-w text-black transition-all duration-200"
        >
          Sign In
        </NavLink>
        <NavLink
          to="/login"
          className="px-4 py-2 bg-b-1 hover:bg-b-2/50 rounded-md transition-all duration-200"
        >
          Log In
        </NavLink>
      </div>
    </div>
  )
}

export default Header
