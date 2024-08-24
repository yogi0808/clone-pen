import React from "react"
import LayoutSvg from "../svgs/LayoutSvg"
import { useDispatch, useSelector } from "react-redux"
import { toggleLayout } from "../store/features/layoutSlice"
import { RootState } from "../store/store"
import usePen from "../Hooks/usePen"

interface PropsType {
  id: string | undefined
}

const HeaderForPen: React.FC<PropsType> = ({ id }) => {
  const dispatch = useDispatch()

  const code = useSelector((state: RootState) => state.code)
  const { loading, updatePen } = usePen()

  return (
    <div className="w-full py-3 flex justify-between bg-p-2 px-3 md:px-8">
      <h3 className="text-lg font-semibold text-p-3 flex items-center justify-center">
        {code.title}
      </h3>
      <div className="flex gap-4">
        <button
          onClick={() => updatePen(id)}
          className="btn !bg-green-600 !text-w hover:!bg-green-700"
        >
          {loading ? "Loading..." : "Save"}
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

export default HeaderForPen
