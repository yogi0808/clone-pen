import React from "react"

// Files
import LayoutSvg from "../../svg/LayoutSvg"
import { useAppContext } from "../../store/appContext"
import { useSelector } from "react-redux"

const Header = () => {
  const { layout, setLayout } = useAppContext()
  const { project } = useSelector((state) => state.project)

  const toggleLayout = () => {
    switch (layout) {
      case "top":
        setLayout("right")
        break
      case "right":
        setLayout("bottom")
        break
      case "bottom":
        setLayout("left")
        break
      case "left":
        setLayout("top")
        break
      default:
        setLayout("left")
    }
  }

  return (
    <div className="w-full py-3 flex justify-between">
      <h3 className="text-lg font-semibold text-b-2 flex items-center justify-center">
        {project.title}
      </h3>
      <button
        className="py-3 px-4 flex items-center justify-center bg-b-1 rounded-lg"
        onClick={toggleLayout}
      >
        <LayoutSvg />
      </button>
    </div>
  )
}

export default Header
