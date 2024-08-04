import React, { useState } from "react"
import { useDispatch } from "react-redux"

// Files
import PublicPens from "./PublicPens"
import CloseSvg from "../svg/CloseSvg"
import Header from "../components/Header"
import SideBar from "../components/SideBar"
import { setProjectDesc, setProjectTitle } from "../store/features/projectSlice"
import { useNavigate } from "react-router"

const Home = () => {
  const [showPopup, setShowPopup] = useState(false)

  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const onClick = () => {
    if (!title || !desc) {
      return alert("Fill the required Inputs")
    }

    dispatch(setProjectTitle(title))
    dispatch(setProjectDesc(desc))

    navigate("/pen")
  }

  return (
    <main className="w-full flex">
      <SideBar setValue={setShowPopup} />
      <div className="flex-1 min-h-screen">
        <Header />
        <div>
          <PublicPens />
        </div>
      </div>

      {showPopup && (
        <div className="w-screen h-screen fixed top-0 left-0 bg-black/40 z-[1] backdrop-blur flex items-center justify-center">
          <div className="z-10 min-w-96 bg-b-2/80 flex flex-col px-5 py-4 gap-3 rounded-lg">
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
              className="px-4 py-2 bg-b-1 hover:bg-b-1/80 rounded-md transition-all duration-200"
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
