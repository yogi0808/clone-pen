import React, { useState } from "react"
import { useSelector } from "react-redux"
import { NavigateFunction, NavLink, useNavigate } from "react-router-dom"
import { RootState } from "../store/store"
import useAuth from "../Hooks/useAuth"
import CloseSvg from "../svgs/CloseSvg"
import usePen from "../Hooks/usePen"

const Header: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.user)

  const [isOpen, setIsOpen] = useState<boolean>(false)

  const { loading, logout } = useAuth()

  const { loading: loadingPen, createPen } = usePen()

  const navigate: NavigateFunction = useNavigate()

  const handleCreatePen: (
    e: React.FormEvent<HTMLFormElement>
  ) => Promise<void> = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault()
    const formaData = new FormData(e.currentTarget)
    const title = formaData.get("title") as string
    const projectType = formaData.get("projectType") as "privet" | "public"

    const penId: String | undefined = await createPen(title, projectType)

    setIsOpen(false)

    navigate(`/pen/${penId}`)
  }

  const handleLogout: () => void = (): void => {
    const text: string = "Are you Sure You want to Logout?"

    if (confirm(text)) {
      logout()
    }
  }

  return (
    <>
      <div className="w-full flex justify-between items-center py-3 md:py-5 bg-p-2 sticky top-0 left-0 px-3 md:px-8  z-[999]">
        <div>
          <NavLink
            to={"/"}
            className="font-semibold text-3xl uppercase tracking-wider px-2 py-1"
          >
            ClonePen
          </NavLink>
        </div>
        <div>
          {user === null ? (
            <>
              <NavLink
                className={({ isActive }) => {
                  return `nav-link ${isActive ? "!text-w" : ""}`
                }}
                to="/login"
              >
                Log In
              </NavLink>
              <NavLink
                className={({ isActive }) => {
                  return `nav-link ${isActive ? "!text-w" : ""}`
                }}
                to="/signin"
              >
                Sign In
              </NavLink>
            </>
          ) : (
            <>
              <button
                className="nav-link"
                onClick={() => setIsOpen(true)}
              >
                Start Coding
              </button>

              <button
                className="nav-link"
                onClick={handleLogout}
                disabled={loading}
              >
                {loading ? "Loading..." : "Logout"}
              </button>
            </>
          )}
        </div>
      </div>

      {isOpen ? (
        <div className="w-full h-full absolute top-0 left-0 bg-black/50 flex items-center justify-center backdrop-blur z-[999]">
          <form
            onSubmit={handleCreatePen}
            className="min-w-[450px] p-8 rounded-lg bg-black border border-p-4 flex gap-4 flex-col"
          >
            <div
              className="w-fit h-fit self-end cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <CloseSvg />
            </div>
            <h1 className="font-bold text-4xl text-center">Create Project</h1>
            <label
              className="input-label"
              htmlFor="title"
            >
              Title
              <input
                type="text"
                name="title"
                placeholder="Enter Your Project title."
                className="input"
                required
              />
            </label>
            <label
              className="input-label"
              htmlFor="projectType"
            >
              Project Type
              <select
                name="projectType"
                className="input"
                required
              >
                <option
                  selected
                  disabled
                  hidden
                >
                  Select Type
                </option>
                <option value="public">Public</option>
                <option value="privet">Privet</option>
              </select>
            </label>
            <button
              className="btn mt-4"
              disabled={loadingPen}
              type="submit"
            >
              {loading ? "Loading..." : "Create Pen"}
            </button>
          </form>
        </div>
      ) : (
        ""
      )}
    </>
  )
}

export default Header
