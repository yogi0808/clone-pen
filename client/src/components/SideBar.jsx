import React from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"

// Files
import { togglePopup } from "../store/features/toggleSlice"

const SideBar = () => {
  const dispatch = useDispatch()

  return (
    <div className="flex flex-col px-3 py-3 bg-b-1 min-h-screen gap-3 sticky top-0 left-0">
      <Link
        to={"/"}
        className="font-semibold text-2xl uppercase tracking-wider px-2 py-1"
      >
        ClonePen
      </Link>
      <span className="uppercase text-[10px] text-center text-b-2">
        try you online editor
      </span>

      <button
        onClick={() => dispatch(togglePopup(true))}
        className="bg-gradient p-1 w-fit h-14 rounded-md"
      >
        <span className="bg-black h-full flex px-3 items-center justify-center text-sm rounded">
          Start Coding
        </span>
      </button>
    </div>
  )
}

export default SideBar
