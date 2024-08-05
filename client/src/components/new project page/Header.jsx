import React from "react"

// Files
import LayoutSvg from "../../svg/LayoutSvg"
import { useDispatch, useSelector } from "react-redux"
import { toggleLayout } from "../../store/features/toggleSlice"

const Header = () => {
  const { project } = useSelector((state) => state.project)

  const dispatch = useDispatch()

  return (
    <div className="w-full py-3 flex justify-between">
      <h3 className="text-lg font-semibold text-b-2 flex items-center justify-center">
        {project.title}
      </h3>
      <button
        className="py-3 px-4 flex items-center justify-center bg-b-1 rounded-lg"
        onClick={() => dispatch(toggleLayout())}
      >
        <LayoutSvg />
      </button>
    </div>
  )
}

export default Header
