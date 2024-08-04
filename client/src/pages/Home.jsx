import toast from "react-hot-toast"
import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { Outlet, useNavigate } from "react-router"

// Files
import CloseSvg from "../svg/CloseSvg"
import Header from "../components/Header"
import SideBar from "../components/SideBar"
import { setProjectDesc, setProjectTitle } from "../store/features/projectSlice"

const Home = () => {
  const [showPopup, setShowPopup] = useState(false)

  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const onClick = () => {
    if (!title || !desc) {
      return toast.error("Fill the required Inputs")
    }

    dispatch(setProjectTitle(title))
    dispatch(setProjectDesc(desc))

    navigate("/pen")
  }

  return (
    <main className="w-full flex">
      <SideBar setValue={setShowPopup} />
      <div className="flex-1 flex flex-col min-h-screen">
        <Header />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>

      {showPopup && (
        <div className="w-screen h-screen fixed top-0 left-0 bg-black/40 z-[1] backdrop-blur flex items-center justify-center">
          <div className="z-10 min-w-96 bg-b-4 flex flex-col px-5 py-4 gap-3 rounded-lg border border-b-1 shadow-md shadow-b-1">
            <button
              className="text-5xl leading-5 rounded-full self-end mb-3"
              onClick={() => setShowPopup(false)}
            >
              <CloseSvg />
            </button>
            <input
              type="text"
              placeholder="Enter Your Project Name."
              className="input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <select className="input">
              <option
                value="public"
                selected
              >
                Public
              </option>
              <option value="privet">Privet</option>
            </select>
            <textarea
              type="text"
              rows={5}
              cols={10}
              placeholder="Enter Your Project Description."
              className="input"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
            <button
              onClick={onClick}
              className="btn hover:!bg-b-1/80"
            >
              Create Project
            </button>
          </div>
        </div>
      )}
    </main>
  )
}

export default Home
