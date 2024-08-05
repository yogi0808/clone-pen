import React from "react"

// Files
import LayoutSvg from "../../svg/LayoutSvg"
import { useDispatch, useSelector } from "react-redux"
import { toggleLayout } from "../../store/features/toggleSlice"
import useSaveCode from "../../Hooks/pen/useSaveCode"
import Loader from "../Loader"

const Header = () => {
  const { project } = useSelector((state) => state.project)
  const { loading, saveCode } = useSaveCode()
  const dispatch = useDispatch()

  return (
    <div className="w-full py-3 flex justify-between">
      <h3 className="text-lg font-semibold text-b-2 flex items-center justify-center">
        {project.title}
      </h3>
      <div className="flex gap-4">
        <button
          onClick={() => saveCode()}
          className="btn !bg-g rounded-md hover:!bg-g/60 hover:!text-w !text-black"
        >
          {loading ? <Loader /> : "Save"}
        </button>
        <button
          className="btn"
          onClick={() => dispatch(toggleLayout())}
        >
          <LayoutSvg />
        </button>
      </div>
    </div>
  )
}

export default Header
