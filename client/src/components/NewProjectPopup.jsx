import React from "react"
import { useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux"

// Files
import CloseSvg from "../svg/CloseSvg"
import { togglePopup } from "../store/features/toggleSlice"
import { setProjectData } from "../store/features/projectSlice"

const NewProjectPopup = () => {
  const { showNewProjectPopup } = useSelector((state) => state.toggle)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData(e.target)

    const data = Object.fromEntries(formData)

    dispatch(setProjectData(data))
    dispatch(togglePopup(false))

    navigate("/pen")
  }

  return showNewProjectPopup ? (
    <div className="w-screen h-screen fixed top-0 left-0 bg-black/40 z-[1] backdrop-blur flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="z-10 min-w-96 bg-b-4 flex flex-col px-5 py-4 gap-3 rounded-lg border border-b-1 shadow-md shadow-b-1"
      >
        <button
          className="text-5xl leading-5 rounded-full self-end mb-3"
          onClick={() => dispatch(togglePopup(false))}
        >
          <CloseSvg />
        </button>
        <input
          type="text"
          name="title"
          placeholder="Enter Your Project Name."
          className="input"
          required
        />
        <select
          name="type"
          className="input"
          required
        >
          <option value="public">Public</option>
          <option value="privet">Privet</option>
        </select>
        <textarea
          type="text"
          name="desc"
          rows={5}
          cols={10}
          placeholder="Enter Your Project Description."
          className="input"
          required
        />
        <button className="btn hover:!bg-b-1/80">Create Project</button>
      </form>
    </div>
  ) : (
    ""
  )
}

export default NewProjectPopup
